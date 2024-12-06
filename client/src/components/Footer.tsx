import { Link } from "react-router-dom";
import { Mail, MapPin, Facebook } from "lucide-react";
import "../assets/css/global.css";
import "../assets/css/AppHeader.css";
import "../assets/css/AppFooter.css";

const Footer = () => {
  return (
    <footer className="grid-full">
      <Link to="/">
        <span className="material-symbols-outlined logo">book_5</span>
      </Link>
      <p>©2024  Ibo.ok inc. All Rights Reserved</p>
      <section className="social-media-icons">
        <Link to="https://www.gmail.com" target="_blank">
          <Mail />
        </Link>
        <Link to="https://www.google.com/maps" target="_blank">
          <MapPin />
        </Link>
        <Link to="https://www.fb.com" target="_blank">
          <Facebook />
        </Link>
        <Link to="https://www.x.com" target="_blank" className="x-twitter-icon">
          <i className="fa-brands fa-x-twitter"></i>
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
