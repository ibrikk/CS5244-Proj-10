import "../assets/css/OrderConfirmation.css";

import { useContext } from "react";
import { OrderDetailsContext } from "../contexts/OrderDetailsContext";
import { asDollarsAndCents } from "../Util";
import { OrderDetails, BookItem } from "../Types";

function ConfirmationTable() {
  const [orderDetails] = useContext(OrderDetailsContext);

  const bookAt = function (
    orderDetails: OrderDetails,
    index: number
  ): BookItem {
    return orderDetails.books[index];
  };
  return (
    <table className="confirmation_table">
      {orderDetails.books?.map((book, i) => (
        <tr className="confirmation_tr" key={i}>
          <td className="confirmation_td">{book.title}</td>
          <td className="confirmation_td">{book.bookId}</td>
          <td className="confirmation_td">
            {asDollarsAndCents(book.price * 100)}
          </td>
        </tr>
      ))}
      <tr>
        <td>
          <b>Total :</b>
        </td>
        <td></td>
        <td>{asDollarsAndCents(25.0 * 100)}</td>
      </tr>
    </table>
  );
}

export default ConfirmationTable;
