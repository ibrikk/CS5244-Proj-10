import React, { useContext, useState } from "react";
import { View } from "lucide-react";
import { BookItem } from "../Types";
import "../assets/css/CategoryBookList.css";
import "../assets/css/Home.css";
import "../assets/css/global.css";
import { CartTypes } from "../reducers/CartReducer";
import { CartContext } from "../contexts/CartContext";
import { asDollarsAndCents } from "../Util";

interface CardProps {
  isHomePage: boolean;
  book: BookItem;
}

const Card: React.FC<CardProps> = ({ book, isHomePage }) => {
  const {
    bookId,
    categoryId,
    title,
    author,
    description,
    isFeatured,
    isPublic,
    price,
    rating,
    picture,
  } = book;

  const { dispatch } = useContext(CartContext);
  const [isClicked, setIsClicked] = useState(false);

  const addBookToCart = () => {
    dispatch({ type: CartTypes.ADD, item: book, id: book.bookId });

    // Set clicked state to true to trigger CSS change
    setIsClicked(true);

    // Reset clicked state after 200ms to remove CSS class
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <div className="card">
      <div className="book-image-read-btn-container">
        <img src={picture} className="book-image" alt={description} />
        {isPublic && (
          <button className="view-btn">
            <View className="view-icon" />
          </button>
        )}
      </div>
      <div className="year-author">
        <p className={isHomePage ? "non-break-homepage" : "non-break"}>
          {title}
        </p>
        {!isHomePage && <p className="book-author">{author}</p>}
      </div>
      <div className="price-add">
        {!isHomePage && (
          <>
            <p>{asDollarsAndCents(price)}</p>

            <button
              className={`add-to-cart-btn ${isClicked ? "clicked" : ""}`}
              onClick={() => addBookToCart()}
            >
              Add to cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
