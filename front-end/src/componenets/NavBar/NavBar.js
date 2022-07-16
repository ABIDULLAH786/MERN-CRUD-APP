import * as React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
        textDecoration: "underline",
    };

    let activeClassName = "underline";

    return (
        <>
            <nav>
                {/* <ul>
                    <li>
                        <NavLink
                            to="messages"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="tasks"
                            className={({ isActive }) =>
                                isActive ? activeClassName : undefined
                            }
                        >
                            Tasks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="tasks">
                            {({ isActive }) => (
                                <span
                                    className={
                                        isActive ? activeClassName : undefined
                                    }
                                >
                                    Tasks
                                </span>
                            )}
                        </NavLink>
                    </li>
                </ul> */}
            </nav>
            <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3 px-4">
                <a class="navbar-brand" href="/">CRUD-APP</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link className="nav-link" to={"/"}>
                                Home
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to={"users"}>
                                All Users
                            </Link>
                        </li>

                    </ul>
                    <form action="/table" method="post" class="form-inline my-2 my-lg-0 d-flex justify-content-between ">
                        <input class="form-control mr-sm-2 mx-2" name="name" type="search" placeholder="Search User By Name" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}