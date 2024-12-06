import React from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import "../assets/css/Home.css";

export interface HeroProps {
  firstCategory: string;
}

const Hero: React.FC<HeroProps> = ({ firstCategory }) => {
  const navigate = useNavigate();
  return (
    <div className="homepage grid grid-full">
      <section className="grid-full hero-section">
        <div className="hero-content">
          <h1>Discover pages of unknown stories and wisdom.</h1>
        </div>
        <button
          className="hero-button"
          onClick={() =>
            navigate(`/category/${firstCategory}`.replace(" ", "%20"))
          }
        >
          <ShoppingBag className="pr-5" />
          <p className="cta-text">Start Shopping</p>
        </button>
      </section>
    </div>
  );
};

export default Hero;
