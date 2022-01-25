import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Users/Home/Home'
import AdminPanel from './Dashboard/AdminPanel'
import AddProducts from './Dashboard/Products/addProduct';
import Listing from './Users/Listing/Listing';
import Details from './Users/Details/Details';
import CartItems from './Users/Cart/placeOrder';
import ViewOrders from './Users/Cart/viewOrders';
import Login from './Users/Signup/Login';
import Register from './Users/Signup/Regiter';
import Footer from './Users/Components/Footer'

class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/dashboard" component={AdminPanel} /> 
            <Route exact path="/dashboard/addProduct" component={AddProducts} />    
            <Route exact path="/list/:id" component={Listing} />       
            <Route path='/details/:productName' component={Details} />
            <Route path='/cart' component={CartItems} />
            <Route path='/viewOrders' component={ViewOrders} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Footer/>
           </BrowserRouter>
        )
    }
}

export default Routing
