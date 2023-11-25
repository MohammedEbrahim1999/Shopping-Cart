import React from 'react';
import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg  bg-dark ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" >Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ">
                                <NavLink style={({isActive})=> ({color: isActive ? "white": "#9898a0"})} className="nav-link " aria-current="page" to="/home">Home</NavLink>
                            </li>
                                <li className="nav-item">
                                <NavLink style={({isActive})=> ({color: isActive ? "white": "#9898a0"})} className="nav-link " aria-current="page" to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={({isActive})=> ({color: isActive ? "white": "#9898a0"})} className="nav-link " aria-current="page" to="/shoppingcart">Shopping Cart</NavLink>
                            </li>
                            {/* <li class="nav-item">
                                <NavLink style={({isActive})=> ({color: isActive ? "red": "black"})} className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li> */}
                        </ul>
                    </div>
                    <div className='bg-info text-light me-3 p-3 rounded'> <i className="fa-solid fa-cart-shopping me-2"></i> CheckOut </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar; 