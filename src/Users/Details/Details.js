import React, { Component } from 'react'
import "./details.css"
import axios from "axios";
import Header from '../Components/Header';


const detailUrl ="https://zenkartapi.herokuapp.com/product"

class Details extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            details: "",
            cartItems:""
            
        }
    }
  

    addCart = (details) => {
    //  this.cartId.push(`${details}`);
        // this.state.cartItems(this.cartId);
        
      sessionStorage.setItem('cart', JSON.stringify(details));
         this.props.history.push("/cart")
        // console.log("cart>>>",details)
     }

    
   
    render() {
        const { details } = this.state
        return (
            <>
            <Header />
            <div className="container-fluid">
            <div className="m-5">
                        <div className="card border-primary restBox" >
                            <div className="row g-0">
                                <div className="col-md-4 restImg">
                                    <img src={details.product_image} className="img-fluid rounded m-3 detailsImg " alt="" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body ms-5">
                                        <h1 className="card-title h1-details">{details.product_name}</h1>
                                        <p className="card-text">
                                            <i className="fas fa-star checked text-success"></i>
                                            <i className="fas fa-star checked text-success"></i>
                                            <i className="fas fa-star checked text-success"></i>
                                            <i className="fas fa-star checked text-success"></i>
                                            <i className="far fa-star text-success"></i>
                                            <small className="text-muted">1K+ Customer Reviews</small></p>
                                        <hr />
                                        <p>{details.product_brand}</p>
                                        <p>{details.product_color}</p>                                  
                                        <p>{details.Processor}</p>
                                         <p className=" text-muted">Free delivery</p> 
                                        <h3 className="h3-details">₹{details.product_price}</h3>
                                        <h3 className="text-success h3-details">Available Now</h3>
                                        <button className="btn btn-success px-3 mx-3 " onClick={() => {
                        this.addCart(details);}}>Buy Now</button>           
                                    </div>      
                                </div>
                                <hr/>
                                <div className="container mx-3"> 
                                <h3>Product Description</h3>
                                <p className="mx-3">{details.product_discription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>                
            </>
        )
    }
    async componentDidMount() {
        const productId = this.props.match.params.productName;
        const response = await axios.get(`${detailUrl}/${productId}`)
        this.setState({ details: response.data[0] });
        // console.log("details >>",response.data[0])
    }
}

export default Details
