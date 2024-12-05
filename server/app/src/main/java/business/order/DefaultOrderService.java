package business.order;

import api.ApiException;
import business.book.Book;
import business.book.BookDao;
import business.cart.ShoppingCart;
import business.customer.CustomerForm;

import java.time.DateTimeException;
import java.time.YearMonth;

public class DefaultOrderService implements OrderService {

	private BookDao bookDao;

	public void setBookDao(BookDao bookDao) {
		this.bookDao = bookDao;
	}

	@Override
	public OrderDetails getOrderDetails(long orderId) {
		// NOTE: THIS METHOD PROVIDED NEXT PROJECT
		return null;
	}

	@Override
	public long placeOrder(CustomerForm customerForm, ShoppingCart cart) {
		validateCustomer(customerForm);
		validateCart(cart);
		// NOTE: MORE CODE PROVIDED NEXT PROJECT

		return -1;
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
