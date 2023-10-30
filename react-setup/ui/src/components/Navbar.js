import React from 'react';
import '../css/Navbar.css';

function Navbar(props) {
    return (
        <div>
            <h3>Welcome to the Manager View</h3>
            <div class="topnav">
                <a class="active" href="index.html">{props.name}</a>
            </div>
        </div>
    );
}

export default Navbar;