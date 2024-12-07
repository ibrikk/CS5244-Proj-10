import "../assets/css/OrderConfirmation.css";

import { useContext } from "react";
import { OrderDetailsContext } from "../contexts/OrderDetailsContext";
import { asDollarsAndCents } from "../Util";
import { OrderDetails, BookItem } from "../Types";

function ConfirmationTable() {
  const [orderDetails] = useContext(OrderDetailsContext);

  const totalPrice = () => {
    let total = 0;
    for (const book of orderDetails.books) {
      total += book.price;
    }
    return total;
  };

  return (
    <table className="confirmation_table">
      <thead>
        <tr>
          <th className="confirmation_th">Title</th>
          <th className="confirmation_th">Book ID</th>
          <th className="confirmation_th">Price</th>
        </tr>
      </thead>
      <tbody>
        {orderDetails.books?.map((book, i) => (
          <tr className="confirmation_tr" key={i}>
            <td className="confirmation_td">{book.title}</td>
            <td className="confirmation_td">{book.bookId}</td>
            <td className="confirmation_td">{asDollarsAndCents(book.price)}</td>
          </tr>
        ))}
        <tr className="confirmation_tr total-row">
          <td className="confirmation_td" colSpan={2}>
            <b>Total:</b>
          </td>
          <td className="confirmation_td total-price">
            {asDollarsAndCents(totalPrice())}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default ConfirmationTable;
