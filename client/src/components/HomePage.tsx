import React, { Dispatch, useContext, useEffect, useState } from "react";
import Hero from "./Hero";
import HomeNavBar from "./HomeNavBar";
import Card from "./Card";
import { BookItem, CategoryItem } from "../Types";
import "../assets/css/global.css";
import "../assets/css/Home.css";
import "../assets/css/CategoryBookList.css";
import "../assets/css/CategoryBookListItem.css";
import "../assets/css/CategoryNav.css";
import "../assets/css/HeaderDropdown.css";
import axios from "axios";
import Spinner from "./Spinner";
import { CategoryContext } from "../contexts/CategoryContext";

/* Static images */
// New Releases
import img1984 from "../assets/images/books/1984.jpg";
import imgAllTheDarkColors from "../assets/images/books/all_the_dark_colors.jpg";
import imgGreatGatsby from "../assets/images/books/great-gratsby.jpg";
import imgTheHousemaid from "../assets/images/books/the_housemaid.jpg";
import imgDaydream from "../assets/images/books/daydream.jpg";
import rmrCreatures from "../assets/images/books/remarkably.jpg";

// For You
import sapiens from "../assets/images/books//sapiens.jpg";
import animalFarm from "../assets/images/books/Animal Farm.jpg";
import whyNationFail from "../assets/images/books/daron acemoglu.jpg";
import originOfSecies from "../assets/images/books/Darvin Origins.jpg";
import bananasBeaches from "../assets/images/books//cyntia Enloe.jpg";
import imaginedCommunities from "../assets/images/books/imagined communities.jpg";

// No image
import noImage from "../assets/images/books/no-image.jpg";
import { SetCategoriesAction } from "../reducers/CategoryReducer";

interface HomePageProps {
  toggleSignIn: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ toggleSignIn }) => {
  const [categoryOneBooks, setCategoryOneBooks] = useState<BookItem[]>([]);
  const [categoryTwoBooks, setCategoryTwoBooks] = useState<BookItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categoryList] = useContext(CategoryContext);

  // Function to add picture paths to each book
  const addLocalImagePaths = (books: BookItem[], categoryId: number) => {
    const imageMap: { [key: number]: { [key: number]: string } } = {
      1001: {
        1001: img1984,
        1002: imgAllTheDarkColors,
        1003: imgGreatGatsby,
        1004: imgTheHousemaid,
        1005: imgDaydream,
        1006: rmrCreatures,
      },
      1002: {
        1007: sapiens,
        1008: animalFarm,
        1009: whyNationFail,
        1010: originOfSecies,
        1011: bananasBeaches,
        1012: imaginedCommunities,
      },
    };
    return books.map((book: BookItem) => ({
      ...book,
      picture: imageMap[categoryId][book.bookId] || noImage, // Fallback to default image
    }));
  };

  useEffect(() => {
    // Fetch category one books
    const fetchCategoryOneBooks = axios.get(
      // "http://webdev.cs.vt.edu:8080/IbrahimBookstoreReactTransact/api/categories/1001/books"
      "http://localhost:8080/IbrahimBookstoreReactTransact/api/categories/1001/books"
    );
    // Fetch category two books
    const fetchCategoryTwoBooks = axios.get(
      // "http://webdev.cs.vt.edu:8080/IbrahimBookstoreReactTransact/api/categories/1002/books"
      "http://localhost:8080/IbrahimBookstoreReactTransact/api/categories/1002/books"
    );

    Promise.all([fetchCategoryOneBooks, fetchCategoryTwoBooks])
      .then(([result1, result2]) => {
        const booksWithImages1 = addLocalImagePaths(result1.data, 1001);
        const booksWithImages2 = addLocalImagePaths(result2.data, 1002);

        setCategoryOneBooks(booksWithImages1);
        setCategoryTwoBooks(booksWithImages2);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <HomeNavBar toggleSignIn={toggleSignIn} />

      <Hero firstCategory={categoryList[0]?.name} />

      {loading ? (
        <Spinner />
      ) : (
        <section className="grid grid-full">
          <h3 className="homepage-category-name">{categoryList[0]?.name}</h3>
          <div className="cards-container grid grid-full">
            {categoryOneBooks.map((book: BookItem) => (
              <Card key={book.bookId} book={book} isHomePage={true} />
            ))}
          </div>

          <h3 className="homepage-category-name">{categoryList[1]?.name}</h3>
          <div className="cards-container grid grid-full">
            {categoryTwoBooks.map((book: BookItem) => (
              <Card key={book.bookId} book={book} isHomePage={true} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default HomePage;
