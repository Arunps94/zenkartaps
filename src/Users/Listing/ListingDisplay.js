import React from 'react';
import { Link } from "react-router-dom";
import './listing.css'


const ListingDisplay = (props) => {

    const renderData = ({ productData }) => {
        if (productData) {
            if (productData.length > 0) {
             return productData.map((item) => {
                    // console.log("item", item)
                    return (
                        <Link to={`/details/${item.product_id}`} key={item.product_id} className="text">
                            <div className="card mb-4 listCard xsmall-card"  >
                                <div className="row g-0">
                                    <div className="col-lg-2 col-md-4 col-sm-4 xsmall-img ">
                                        <img src={item.product_image} className="img-fluid rounded p-2 cardImg " alt={item.product_name} />
                                    </div>
                                    <div className="col-lg-8 col-md-4 col-sm-4 xsmall-body">
                                        <div className="card-body">
                                            <h2 className="card-title text-dark">{item.product_name}</h2>
                                            <p className="card-text text-muted">{item.product_brand}</p>
                                            <p className="card-text text-muted">{item.product_color}</p>
                                           <h3 className="card-text text-dark">₹{item.product_price}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            } else {
                return <h3>No Data Found</h3>;
            }
        }
        else {
            return (
                <div className="text-center">
                    <div className="spinner-border text-primary mt-5" role="status" style={{ "width": "5rem", "height": "5rem" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            );
        }
    }

    return <>{renderData(props)}</>

}

export default ListingDisplay
