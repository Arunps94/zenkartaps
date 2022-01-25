import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-dark sticky-top bg-primary  p-1 shadow">
                <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/" >Zenkart</Link>
                <h5 className="text-center text-light">Admin Panel</h5>
                <div className="navbar-nav">
                    <Link className="btn btn-outline-light border mx-5" to="/dashboard/addProduct" >Add Product</Link>
                </div>
            </header>
        )
    }
}

export default Header
