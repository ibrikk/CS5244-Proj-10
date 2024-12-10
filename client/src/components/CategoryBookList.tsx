import React, { useContext, useEffect, useState } from "react";
import "../assets/css/CategoryBookList.css";
import "../assets/css/global.css";
import Card from "./Card";
import CategoryNavBar from "./CategoryNavBar";
import { useParams } from "react-router-dom";
import { BookItem, CategoryItem } from "../Types";
import axios from "axios";
import Spinner from "./Spinner";

import { addLocalImagePaths } from "../Util";

import { CategoryContext } from "../contexts/CategoryContext";

interface CategoryPageProps {
  toggleSignIn: () => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ toggleSignIn }) => {
  const { categoryName = "New Releases" } = useParams<{
    categoryName: string;
  }>();
  const [bookList, setBookList] = useState<BookItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const categoryList = useContext(CategoryContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://webdev.cs.vt.edu:8080/IbrahimBookstoreReactTransact/api/categories/name/${categoryName}/books`
        // `http://localhost:8080/IbrahimBookstoreReactTransact/api/categories/name/${categoryName}/books`
      )
      .then((result) => {
        const booksWithImages = addLocalImagePaths(result.data, categoryName);
        setBookList(booksWithImages);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <>
      <CategoryNavBar toggleSignIn={toggleSignIn} />
      {loading ? (
        <Spinner />
      ) : bookList.length === 0 ? (
        <div className="not-found">
          <p>No books found for this category.</p>
        </div>
      ) : (
        <div className="grid grid-full">
          <div className="cards-container grid grid-full">
            {bookList.map((book: BookItem) => (
              <Card key={book.bookId} book={book} isHomePage={false} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
