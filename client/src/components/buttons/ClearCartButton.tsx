import { CircleX } from "lucide-react";
import "../../assets/css/CartTable.css";

export default function ClearCartButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="clear-cart-container">
      <button className="clear-cart-btn" onClick={onClick}>
        Clear Cart &nbsp; <CircleX className="ml-2" />
      </button>
    </div>
  );
}
