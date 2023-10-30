import React from 'react';
import { Link } from "react-router-dom";
import routes from '../routes';

import '../css/Navbar.css';

function Navbar(props) {
    return (
        <div>
            {routes} {/*defines the route to go to*/}
            <div class="topnav">
                <Link to="manager">Click to view our manager page</Link>
                <Link to="menu">Click to view our menu page</Link>
                <Link to="selfserve">Click to view our selfserve page</Link>
            </div>
        </div>
    );
}

export default Navbar;