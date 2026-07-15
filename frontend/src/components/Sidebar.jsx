import { NavLink } from "react-router-dom";

import {
    FaTachometerAlt,
    FaTools,
    FaPlusCircle
} from "react-icons/fa";

export default function Sidebar({ isOpen, closeSidebar }) {

    return (

        <div
            style={{
                position: "fixed",
                top: "56px",
                left: isOpen ? "0" : "-250px",
                width: "250px",
                height: "100%",
                background: "#212529",
                transition: "left 0.3s ease",
                paddingTop: "20px",
                zIndex: 1000
            }}
        >

            <ul className="nav flex-column">

                <li className="nav-item">

                    <NavLink
                        to="/"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
    isActive
        ? "nav-link bg-primary text-white rounded"
        : "nav-link text-white"
}
                    >
                        <FaTachometerAlt className="me-2" />
                        Dashboard
                    </NavLink>

                </li>

                <li className="nav-item">

                    <NavLink
                        to="/equipment"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
    isActive
        ? "nav-link bg-primary text-white rounded"
        : "nav-link text-white"
}
                    >
                        <FaTools className="me-2" />
                        Equipment
                    </NavLink>

                </li>

                <li className="nav-item">

                    <NavLink
                        to="/equipment/add"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
    isActive
        ? "nav-link bg-primary text-white rounded"
        : "nav-link text-white"
}
                    >
                        <FaPlusCircle className="me-2" />
                        Add Equipment
                    </NavLink>

                </li>

            </ul>

        </div>

    );

}