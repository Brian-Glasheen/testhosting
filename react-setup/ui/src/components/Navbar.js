import React from 'react';
import { NavLink } from "react-router-dom";
import routes from '../routes';

import '../css/Navbar.css';

function Navbar(props) {
    return (
        <div>
            {routes} {/*defines the route to go to*/}
            <div className="topnav">
                <NavLink exact="true" activeclassname="active" to="">Home</NavLink>
                <NavLink activeclassname="active" to="manager">Manager</NavLink>
                <NavLink activeclassname="active" to="menu">Menu</NavLink>
                <NavLink activeclassname="active" to="selfserve">Self-Serve</NavLink>
            </div>
        </div>
    );
}

export default Navbar;