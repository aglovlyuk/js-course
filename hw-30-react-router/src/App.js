import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";

import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Hotel from "./pages/Hotel";
import Packages from "./pages/Packages";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="nav-menu">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                        to="hotels"
                    >
                        Hotels
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                        to="flights"
                    >
                        Flights
                    </NavLink>

                    <NavLink
                        className={({ isActive }) =>
                            isActive ? "is-active" : ""
                        }
                        to="packages"
                    >
                        Packages
                    </NavLink>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="hotels" element={<Hotels />}>
                    <Route path=":hotelId" element={<Hotel />} />
                </Route>
                <Route path="flights" element={<Flights />} />
                <Route path="packages" element={<Packages />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
