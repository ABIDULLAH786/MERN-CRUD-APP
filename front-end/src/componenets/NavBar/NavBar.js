import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../Services/auth.services";

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();

        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logOut = () => {
        AuthService.logout();
        window.location.reload();

    };
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" hrefLang="https://henok.us" to="/">
                    MERN CRUD APP
                </NavLink>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mobileMenu"
                    aria-controls="mobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="mobileMenu">
                    {currentUser && (
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    to="/products"
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeClassName="active"
                                    to="/new"
                                >
                                    Add New Product
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                activeClassName="active"
                                to="/search"
                            >
                                Search
                            </NavLink>
                        </li> */}

                        </ul>
                    )}
                    <div class="d-flex">
                        {currentUser ? (
                            <Link to="signin" onClick={logOut}
                                class="btn btn-primary" type="submit">Logout</Link>
                        ) : (
                            <div>
                                <Link to="signin" class="btn btn-primary"
                                    type="submit">Login</Link>
                                <Link to="signup" class="btn btn-primary mx-2"
                                    type="submit">Signup</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
