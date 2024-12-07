import "../assets/css/OrderConfirmation.css";
import { useContext } from "react";
import { OrderDetailsContext } from "../contexts/OrderDetailsContext";
import { asDollarsAndCents } from "../Util";

interface ConfirmationTableProps {
  totalPrice: number;
}

function ConfirmationTable({ totalPrice }: ConfirmationTableProps) {
  const [orderDetails] = useContext(OrderDetailsContext);

  return (
    <div className="confirmation-table-container">
      <h3>Cart Information</h3>
      <table className="confirmation_table">
        <thead>
          <tr>
            <th className="confirmation_th">Title</th>
            <th className="confirmation_th">Quantity</th>
            <th className="confirmation_th">Price</th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.books?.map((book, i) => (
            <tr className="confirmation_tr" key={i}>
              <td className="confirmation_td">{book.title}</td>
              <td className="confirmation_td">
                {orderDetails.lineItems[i].quantity}
              </td>
              <td className="confirmation_td">
                {asDollarsAndCents(
                  book.price * orderDetails?.lineItems[i]?.quantity
                )}
              </td>
            </tr>
          ))}
          <tr className="confirmation_tr total-row">
            <td className="confirmation_td" colSpan={2}>
              <b>Total:</b>
            </td>
            <td className="confirmation_td total-price">
              {asDollarsAndCents(totalPrice)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ConfirmationTable;
