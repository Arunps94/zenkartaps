import React, { Component } from 'react'
import './Home.css';
import { Link } from "react-router-dom";


const url = "https://zenkartapi.herokuapp.com/productType";

class QuickProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productType: ""
        }
    }

    renderProducttype = (data) => {
        if (data) {
            return data.map((item) => {
                    // console.log("id",item.product_typeid)
                return (<>
                    <Link to={`/list/${item.subCategory}`} className="card col-lg m-2 border-primary text quick" key={item.product_typeid}>
                        <img src={item.product_image} className="card-img-top cardimg mt-2 quickImg" alt={item.subCategory} />
                        <div class="card-body">
                            <h5 className="card-title text-center">{item.subCategory}</h5>    
                            <p className="text-muted text-center">{item.category}</p>
                            <p className="text-muted text-center">{item.Content}</p>
                        </div>
                    </Link>
                </>)
            })

        }
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row ">
                {this.renderProducttype(this.state.productType)}
                </div>
            </div>
        )
    }
    //api call 
    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ productType: data })
                // console.log(data)
            })
    }
}

export default QuickProducts;
