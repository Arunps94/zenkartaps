import React, { Component } from 'react';
import Header from '../Components/Header';
import "./cart.css";
import { Link } from 'react-router-dom';

// const productUrl ="http://localhost:8123/productItem";
const cartOrdersUrl = "https://zenkartapi.herokuapp.com/cartOrders"

class CartItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Math.floor(Math.random() * 100000),
            product_name: JSON.parse(sessionStorage.getItem('cart')).product_name,
            name: localStorage.getItem('userdata') ? localStorage.getItem('userdata').split(',')[0] : '',
            phone: localStorage.getItem('userdata') ? localStorage.getItem('userdata').split(',')[2] : '',
            email: localStorage.getItem('userdata') ? localStorage.getItem('userdata').split(',')[1] : '',
            cost: JSON.parse(sessionStorage.getItem('cart')).product_price,
            address: '',

        }
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
        fetch(cartOrdersUrl, {
            method: "POST",
            headers: {
                'accept': "application/json",
                "content-type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
            // .then(this.props.history.push('/viewOrders'))
            .then(console.log('going for payment'));
    };


    render() {
        // console.log("render",this.state.productItems)
        const productItems = JSON.parse(sessionStorage.getItem('cart'))
        if (localStorage.getItem('aps') == null) {
            return (
                <> <Header />
                   <h5 className="text-center">
          First
            < Link to="/login" className="text-dark m-2">Login</Link>
            OR
            <Link to="/register" className="text-dark m-2">Register</Link>
             to Place Order</h5></>)

        } else {
            return (
                <>
                    <Header />
                    <div className="container">
                        <br />
                        <div className="card border-primary mb-3">
                            <div className="card-header bg-primary text-white"><h3>CART</h3></div>
                            <div className="card-body ">
                                <form action="https://zpatmaps.herokuapp.com/paynow" method="POST">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="row">
                                                <div className="col-md-6  mb-3">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="name"
                                                            placeholder="Name"
                                                            value={this.state.name}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6  mb-3">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="email"
                                                            placeholder="Email"
                                                            value={this.state.email}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6  mb-3">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="phone"
                                                            placeholder="Phone"
                                                            value={this.state.phone}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6  mb-3">
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            name="address"
                                                            placeholder="Address"
                                                            value={this.state.address}
                                                            onChange={this.handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <input type="hidden" name="cost" value={productItems.product_price} />
                                    <input type="hidden" name="id" value={this.state.id} />
                                    <input type="hidden" name="product_name" value={this.state.product_name} />
                                    <div className="card mb-3 border-primary" >
                                        <div className="row g-0">
                                            <div className="col-md-3 ">
                                                <img src={productItems.product_image} class="img-fluid rounded  cartImg" alt={productItems.product_name} />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card-body mx-5">
                                                    <h4 className="card-title">{productItems.product_name}</h4>
                                                    <p>{productItems.product_brand}</p>
                                                    <p>{productItems.product_color}</p>
                                                    <h5 className="mt-5">₹{productItems.product_price}</h5>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="mb-3 mx-3 ">
                                                <button className="btn btn-success p-2 px-5  cartB" onClick={this.handleSubmit} type="submit" >
                                                    Place Order
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </>
            )
        }


    }
}

export default CartItems
