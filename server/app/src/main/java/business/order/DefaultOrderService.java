package business.order;

import api.ApiException;
import business.BookstoreDbException;
import business.JdbcUtils;
import business.book.Book;
import business.book.BookDao;
import business.cart.ShoppingCart;
import business.cart.ShoppingCartItem;
import business.customer.Customer;
import business.customer.CustomerForm;
import business.customer.CustomerDao;

import java.sql.Connection;
import java.util.Date;
import java.sql.SQLException;
import java.time.DateTimeException;
import java.time.YearMonth;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

public class DefaultOrderService implements OrderService {

	private BookDao bookDao;
	private OrderDao orderDao;
	private CustomerDao customerDao;
	private LineItemDao lineItemDao;

	public void setBookDao(BookDao bookDao) {
		this.bookDao = bookDao;
	}

	@Override
	public OrderDetails getOrderDetails(long orderId) {
		Order order = orderDao.findByOrderId(orderId);
		Customer customer = customerDao.findByCustomerId(order.customerId());
		List<LineItem> lineItems = lineItemDao.findByOrderId(orderId);
		List<Book> books = lineItems
				.stream()
				.map(lineItem -> bookDao.findByBookId(lineItem.bookId()))
				.toList();
		return new OrderDetails(order, customer, lineItems, books);
	}

	@Override
	public long placeOrder(CustomerForm customerForm, ShoppingCart cart) {
		validateCustomer(customerForm);
		validateCart(cart);
		try (Connection connection = JdbcUtils.getConnection()) {
			Date ccExpDate = getCardExpirationDate(
					customerForm.getCcExpiryMonth(),
					customerForm.getCcExpiryYear());
			return performPlaceOrderTransaction(
					customerForm.getName(),
					customerForm.getAddress(),
					customerForm.getPhone(),
					customerForm.getEmail(),
					customerForm.getCcNumber(),
					ccExpDate, cart, connection);
		} catch (SQLException e) {
			throw new BookstoreDbException("Error during close connection for customer order", e);
		}
	}

	private Date getCardExpirationDate(String monthString, String yearString) {
		int month = Integer.parseInt(monthString);
		int year = Integer.parseInt(yearString);
		YearMonth yearMonth = YearMonth.of(year, month);
		return java.sql.Date.valueOf(yearMonth.atEndOfMonth());
	}

	private long performPlaceOrderTransaction(
			String name, String address, String phone,
			String email, String ccNumber, Date date,
			ShoppingCart cart, Connection connection) {
		try {
			connection.setAutoCommit(false);
			long customerId = customerDao.create(
					connection, name, address, phone, email,
					ccNumber, date);
			long customerOrderId = orderDao.create(
					connection,
					cart.getComputedSubtotal() + cart.getSurcharge(),
					generateConfirmationNumber(), customerId);
			for (ShoppingCartItem item : cart.getItems()) {
				lineItemDao.create(connection, customerOrderId,
						item.getBookId(), item.getQuantity());
			}
			connection.commit();
			return customerOrderId;
		} catch (Exception e) {
			try {
				connection.rollback();
			} catch (SQLException e1) {
				throw new BookstoreDbException("Failed to roll back transaction", e1);
			}
			return 0;
		}
	}

	private int generateConfirmationNumber() {
		return ThreadLocalRandom.current().nextInt(999999999);
	}

	private void validateCustomer(CustomerForm customerForm) {

		String name = customerForm.getName();
		String address = customerForm.getAddress();
		String phone = customerForm.getPhone();
		String email = customerForm.getEmail();
		String ccNumber = customerForm.getCcNumber();

		if (name == null || name.equals("") || name.length() > 45) {
			throw new ApiException.ValidationFailure("name", "Invalid name field");
		}

		if (address == null || address.equals("") || address.length() < 4 || address.length() > 45) {
			throw new ApiException.ValidationFailure("address", "Invalid address field");

		}
		// Removing all spaces, dashes, and patterns from the string
		phone = phone.replaceAll("[^0-9]", "");
		if (phone == null || phone.equals("") || phone.length() != 10) {
			throw new ApiException.ValidationFailure("phone", "Invalid phone field");
		}

		if (email == null || email.equals("") || email.contains(" ") || !email.contains("@") || email.endsWith(".")) {
			throw new ApiException.ValidationFailure("email", "Invalid email field");
		}

		ccNumber = ccNumber.replaceAll("[^0-9]", "");
		if (ccNumber == null || ccNumber.equals("") || ccNumber.length() < 14 || ccNumber.length() > 16) {
			throw new ApiException.ValidationFailure("ccNumber", "Invalid credit card number");
		}

		if (expiryDateIsInvalid(customerForm.getCcExpiryMonth(), customerForm.getCcExpiryYear())) {
			throw new ApiException.ValidationFailure("Please enter a valid expiration date.");
		}
	}

	private boolean expiryDateIsInvalid(String ccExpiryMonth, String ccExpiryYear) {
		try {
			YearMonth expiryDate = YearMonth.of(Integer.parseInt(ccExpiryYear), Integer.parseInt(ccExpiryMonth));
			YearMonth currentDate = YearMonth.now();
			if (expiryDate.isBefore(currentDate)) {
				return true;
			}
		} catch (DateTimeException e) {
			return true;
		}
		return false;

	}

	private void validateCart(ShoppingCart cart) {
		if (cart.getItems().size() <= 0 || cart.getItems() == null) {
			throw new ApiException.ValidationFailure("Cart is empty.");
		}

		cart.getItems().forEach(item -> {
			if (item.getQuantity() < 1 || item.getQuantity() > 99) {
				throw new ApiException.ValidationFailure("Invalid quantity");
			}
			Book databaseBook = bookDao.findByBookId(item.getBookId());
			if (databaseBook == null) {
				throw new ApiException.ValidationFailure("Invalid book id");
			}
			if (item.getPrice() != bookDao.findByBookId(item.getBookId()).price()) {
				throw new ApiException.ValidationFailure("Invalid price");
			}
			if (item.getCategoryId() != bookDao.findByBookId(item.getBookId()).categoryId()) {
				throw new ApiException.ValidationFailure("Invalid category");
			}

		});
	}
}
