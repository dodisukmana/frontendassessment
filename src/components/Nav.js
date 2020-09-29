import React from 'react';

function Nav() {
    return (
        <div className="border-bottom ">
        <ul class="nav justify-content-center">
            <li class="nav-item">
            <a class="nav-link active" style={{color:"black", fontFamily:"arial black"}} href="#">SKINCARE</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" style={{color:"black", fontFamily:"arial black"}} href="#">MAKEUP</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" style={{color:"black", fontFamily:"arial black"}} href="#">BODY</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" style={{color:"black", fontFamily:"arial black"}} href="#">HAIR</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" style={{color:"black", fontFamily:"arial black"}} href="#">FRAGRANCE</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" style={{color:"black", fontFamily:"arial black"}} href="#">NAILS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" style={{color:"black", fontFamily:"arial black"}} href="#">TOOLS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" style={{color:"black", fontFamily:"arial black"}} href="#">BRANDS</a>
        </li>
        </ul>
        </div>
    )
}

export default Nav;