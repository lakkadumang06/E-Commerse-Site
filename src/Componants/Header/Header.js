import React, { useState } from 'react'
import './Header.css'
import { CiShoppingCart } from "react-icons/ci";
// import logo from '../../assests/logo.webp'
import { Link } from 'react-router-dom';



const Header = () => {

    return (
        <>
            <div className="Header position-fixed w-100 z-1" >
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="logo col-3">
                            <Link to="/"  className='nav-link'><h1>MY_STORE</h1></Link>
                        </div>
                        <div className="main-menu d-flex align-items-center justify-content-between col-6">
                            <Link className='nav-link' to="/">HOME</Link>
                            <Link className='nav-link' href="#link">ABOUT</Link>
                            <Link className='nav-link' href="#link">CONTACTUS</Link>
                            <Link className='nav-link' href="#link">BLOGS</Link>
                            <Link className='nav-link' href="#link">OFFERS</Link>
                        </div>
                        <div className="cart col-3 d-flex justify-content-end align-items-center">
                            <div className="cart-icon ms-4">
                                <h2><CiShoppingCart /></h2>
                            </div>
                            <h3 className='ms-2'>Cart</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
