import { NavLink } from "react-router-dom";

import React from 'react';

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <div className="container-fluid"> */}
                <a className="navbar-brand" href="#">Conference GO!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/locations/new">New location</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="conferences/new">New conference</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="presentations/new">New presentation</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="attendees/new">Attend conference</NavLink>
                        </li>
                    </ul>
                </div>
        {/* </div> */}
    </nav>
    );
}

export default Nav;
