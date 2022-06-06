import { Outlet, Link } from "react-router-dom";

const Hotels = () => {
    return (
        <>
            <h1>Hotels page</h1>

            <ul>
                <li>
                    <Link to="/hotels/1">Hotel #1</Link>
                </li>
                <li>
                    <Link to="/hotels/2">Hotel #2</Link>
                </li>
            </ul>

            <Outlet />
        </>
    );
};

export default Hotels;
