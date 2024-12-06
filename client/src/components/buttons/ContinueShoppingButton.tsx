import { ShoppingBasket } from "lucide-react";
import "../../assets/css/CartTable.css";

const ContinueShoppingButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="continue-shopping-btn" onClick={onClick}>
      Continue Shopping &nbsp; <ShoppingBasket />
    </button>
  );
};

export default ContinueShoppingButton;
