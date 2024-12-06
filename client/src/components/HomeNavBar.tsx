import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CategoryItem } from "../Types";
import { CategoryContext } from "../contexts/CategoryContext";

interface HomeNavBarProps {
  toggleSignIn: () => void;
}

const HomeNavBar: React.FC<HomeNavBarProps> = ({ toggleSignIn }) => {
  const navigate = useNavigate();
  const [categoryList] = useContext(CategoryContext);

  return (
    <nav className="grid grid-full">
      <div className="custom-select">
        <select>
          {categoryList.map((category: CategoryItem, index: number) => (
            <option key={index} value={category.categoryId}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="select-styled">Categories</div>
        <ul className="select-options">
          {categoryList.map((category: CategoryItem, index: number) => (
            <li
              key={index}
              onClick={() => navigate(`/category/${category.name}`)}
              rel={category.categoryId.toString()}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="search-bar-homepage">
        <form action="/category">
          <input type="text" className="search-input" placeholder="Search..." />
        </form>
        <span className="material-symbols-outlined search-icon">search</span>
      </div>
      <div className="homepage-categories" onClick={toggleSignIn}>
        {categoryList.slice(0, 5).map((category: CategoryItem, idx: number) => (
          <Link
            key={idx}
            to={`/category/${category.name}`}
            className="category-link"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default HomeNavBar;
