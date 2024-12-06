import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/css/CategoryBookList.css";
import "../assets/css/global.css";
import { CategoryItem } from "../Types";
import { CategoryContext } from "../contexts/CategoryContext";

interface CategoryNavBarProps {
  toggleSignIn: () => void;
}

const CategoryNavBar: React.FC<CategoryNavBarProps> = ({ toggleSignIn }) => {
  const { categoryName } = useParams();
  const [categoryList] = useContext(CategoryContext);

  const isActive = (category: string) => categoryName === category;

  return (
    <div className="grid grid-full nav">
      <div className="search-bar-category">
        <form action="/category">
          <input type="text" className="search-input" placeholder="Search..." />
        </form>
        <span className="material-symbols-outlined search-icon">search</span>
      </div>
      <div className="categorypage-categories" onClick={toggleSignIn}>
        {categoryList.map((category: CategoryItem) => (
          <Link
            key={category.categoryId}
            to={`/category/${category.name}`}
            className={
              isActive(category.name) ? "selected-category" : "category-link"
            }
          >
            <p className="category-text">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavBar;
