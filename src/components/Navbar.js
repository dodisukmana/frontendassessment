import React from 'react';
import logo from '../img/icon.jpg';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light border-bottom ">
            <a className="navbar-brand" href="#">
                <img src={logo} width='150px' />
            </a>
            <form className="w-75 p-3">
                <input className="form-control mr-sm-2" type="search" placeholder="Search products, articles, topics, brands, etc" aria-label="Search"/>
            </form>
            <button type="button" class="btn btn-danger">LOGIN / SIGN UP</button>
      </nav>
    )
}

export default Navbar;
