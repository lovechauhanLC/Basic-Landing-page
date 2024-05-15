import React from "react";

const Nav = () => {
    return (
        <div>
            <div className="nav-container">
                <div className="logo-image">
                    <img src="/images/brand_logo.png" alt="nike-logo" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button className="red-button">Login</button>
            </div>
        </div>
    );
}

export default Nav;