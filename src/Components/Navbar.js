import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link text-white" aria-current="page" to="/contact-us">Contact Us</Link>
                        <Link className="nav-link text-white" aria-current="page" to="/about-us">About Us</Link>
                        <Link className="nav-link text-white" aria-current="page" to="/sign-up">Sign up</Link>
                        {/* <Link className="nav-link text-white" to="#">Contact Us</Link>
                        <Link className="nav-link text-white" to="#">About Us</Link>
                        <Link className="nav-link text-white" to="#">Sign Up</Link> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar