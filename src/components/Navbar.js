import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar
    navbar-dark bg-primary navbar-expand-lg">
            <div className="navbar-brand">
                Github Search
        </div>
            <ul className="navbar-nav">
                <lid className="nav-item">
                    <NavLink exact to="/" className="nav-link">Main</NavLink>
                </lid>
                <lid className="nav-item">
                    <NavLink to="/about" className="nav-link">Info</NavLink>
                </lid>
            </ul>
        </nav>
    );
}

export default Navbar;