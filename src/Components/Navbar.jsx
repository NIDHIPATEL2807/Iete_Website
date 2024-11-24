import { Link } from "react-router-dom";
import logo from "../assets/logoiete.png";

const Navbar = () => {
  return (
    <nav className="bg-blue-900/30 backdrop-blur-md p-1 fixed top-0 left-0 w-full z-50">
      <ul className="flex space-x-4 justify-center items-center text-white gap-20 text-xl">
        <li>
          <Link
            to="/"
            className="transition-all duration-300 hover:bg-black p-2 rounded-sm"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/events"
            className="transition-all duration-300 hover:bg-blue-500/70 p-2 rounded-md"
          >
            Events
          </Link>
        </li>

        {/* Logo between Events and Team */}
        <li className="flex justify-center items-center">
          <img
            src={logo}
            alt="IETE Logo"
            className="h-24 w-24 transition-all duration-300 hover:scale-110"
          />
        </li>

        <li>
          <Link
            to="/team"
            className="transition-all duration-300 hover:bg-blue-500/70 p-2 rounded-md"
          >
            Team
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="transition-all duration-300 hover:bg-blue-500/70 p-2 rounded-md"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
