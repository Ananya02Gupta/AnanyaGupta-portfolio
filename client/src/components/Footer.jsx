import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © 2026 <span>Ananya Gupta</span>. All Rights Reserved.
      </p>

      <p className="made-with">
        Made with <FaHeart className="heart3d" />
      </p>
    </footer>
  );
}

export default Footer;