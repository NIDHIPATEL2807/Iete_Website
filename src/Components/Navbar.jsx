import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4 justify-center text-white">
                <li><Link to="/">Home</Link></li>

                <li><Link to="/events">Events</Link></li>         
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/about">About</Link></li>
                {/* help me place mode toggle  */}

                <ModeToggle/>             
            </ul>
        </nav>
    );
};

export default Navbar;
