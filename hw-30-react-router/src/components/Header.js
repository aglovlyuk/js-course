import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="App-header">
            <nav className="nav-menu">
                <NavLink
                    className={({ isActive }) => (isActive ? "is-active" : "")}
                    to="/"
                >
                    Home
                </NavLink>

                <NavLink
                    className={({ isActive }) => (isActive ? "is-active" : "")}
                    to="hotels"
                >
                    Hotels
                </NavLink>

                <NavLink
                    className={({ isActive }) => (isActive ? "is-active" : "")}
                    to="flights"
                >
                    Flights
                </NavLink>

                <NavLink
                    className={({ isActive }) => (isActive ? "is-active" : "")}
                    to="packages"
                >
                    Packages
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
