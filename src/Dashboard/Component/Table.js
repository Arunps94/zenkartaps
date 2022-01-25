import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

const ProductsUrl = "https://zenkartapi.herokuapp.com/products";
const deleteProductUrl = "https://zenkartapi.herokuapp.com/deleteProduct"

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: "",
    
    };
  }

  deleteProduct = (product_id) => {
     if(window.confirm(`Are you sure you want to delete ${product_id} product`))
   { axios.delete(`${deleteProductUrl}/${product_id}`)
     .then(() => {
      return axios.get(ProductsUrl)
  })
     .then((respons) => { 
      const product = respons.data;
      this.setState({ product });
      //  console.log(respons)
    });}
      
  }

  renderProducts = (data) => {
    if (data) {
      return data.map((item,index) => {
        // console.log("Products",item)
        return (
          <tr key={index}>
            <th scope="row">{item.product_id}</th>
            <td><img src={item.product_image} alt={item.product_name} style={{width:"50px",height:"50px"}} /></td>
            <td>{item.product_name}</td>
            <td>{item.category}</td>
            <td>{item.subCategory}</td>
            <td>{item.product_brand}</td>
            <td>{item.product_price}</td>
            <td>
              {/* <Link to={`/dashboard/edit/${item.product_id}`}
                className="btn btn-outline-primary mx-2"
              >
                Edit
              </Link> */}
              <Link
                className="btn btn-danger" onClick={() => this.deleteProduct(item.product_id) }
                to='/dashboard'
              >
                Delete
              </Link>
            </td>
          </tr>
        );
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Name</th>
                <th scope="col">Category</th>
                <th scope="col">Sub-category</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
                <th>Action</th>
              </tr>

            </thead>
            <tbody>
              {this.renderProducts(this.state.products)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  //api call on page load
  async componentDidMount() {
    const res = await axios.get(ProductsUrl)
    this.setState({ products: res.data.reverse()})

    // fetch(ProductsUrl, { method: "GET" })
    //   .then((res) => res.json())
    //   .then((data) => );
  }
}

export default withRouter(Table);
