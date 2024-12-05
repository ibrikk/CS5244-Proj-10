
package business;

import business.book.BookDao;
import business.book.BookDaoJdbc;
import business.category.CategoryDao;
import business.category.CategoryDaoJdbc;
import business.customer.CustomerDao;
import business.customer.CustomerDaoJdbc;
import business.order.DefaultOrderService;
import business.order.LineItemDao;
import business.order.OrderDao;
import business.order.OrderDaoJdbc;
import business.order.LineItemDaoJdbc;
import business.order.OrderService;

public class ApplicationContext {

    private CategoryDao categoryDao;
    private BookDao bookDao;
    private OrderService orderService;
    private OrderDao orderDao;
    private CustomerDao customerDao;
    private LineItemDao lineItemDao;

    public static ApplicationContext INSTANCE = new ApplicationContext();

    private ApplicationContext() {
        categoryDao = new CategoryDaoJdbc();
        bookDao = new BookDaoJdbc();
        orderDao = new OrderDaoJdbc();
        customerDao = new CustomerDaoJdbc();
        lineItemDao = new LineItemDaoJdbc();
        orderService = new DefaultOrderService();
        ((DefaultOrderService) orderService).setBookDao(bookDao);
        ((DefaultOrderService) orderService).setCustomerDao(customerDao);
        ((DefaultOrderService) orderService).setLineItemDao(lineItemDao);
        ((DefaultOrderService) orderService).setOrderDao(orderDao);
    }

    public CategoryDao getCategoryDao() {
        return categoryDao;
    }

    public BookDao getBookDao() {
        return bookDao;
    }

    public OrderService getOrderService() {
        return orderService;
    }

}
