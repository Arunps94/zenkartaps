import React, { Component } from "react";
import { Link } from "react-router-dom";

const productPostUrl = "https://zenkartapi.herokuapp.com/addProducts";

class addProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_id: Math.floor(Math.random() * 100000),
      product_name: "",
      category: "",
      subCategory: " ",
      product_price: "",
      product_image: "",
      product_brand: "",
      product_color: "",
      product_discription: "",
     
    };
    
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log("value: " + event.target.value);
  };

  handleCategory = (event) => {
    // console.log("subcategory Selected!!");
    this.setState({
      category: event.target.value,
    });
  };

  handlesubCategory = (event) => {
    // console.log("subcategory Selected!!");
    this.setState({
      subCategory: event.target.value,
    });
  };

 

  handleSubmit = () => {
    fetch(productPostUrl, {
      method: "POST",
      headers: {
        'accept': "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((res) => res.json())
    .then((data) => {

      // localStorage.setItem('admin', data.res)
      this.props.history.push("/dashboard")
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card border-primary mt-5">
          <div className="card-header bg-primary text-light">
            <h2>Product Form</h2>
          </div>
          <div className="card-body bg-light">
            <h5 className="card-title">Product Data</h5>
            {/* <form action="" method="POST"> */}
            <div className="row g-2 mt-3">
              <div className="form-floating col-md">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Product id"
                  name="product_id"
                  value={this.state.product_id}
                  onChange={this.handleChange}
                  required
                />
                <label for="floatingInput">Product id</label>
              </div>
              <div className="form-floating col-md">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Product name"
                  name="product_name"
                  value={this.state.product_name}
                  onChange={this.handleChange}
                  required
                />
                <label for="floatingInput">Product name</label>
              </div>
            </div>
            <div className="row g-2 mt-3">
              <div className="col-md">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="floatingSelectGrid"
                    onChange={this.handleCategory}
                  >
                    <option value="">Select Category</option>
                    <option value="Electronic">Electronic</option>
                  </select>

                  <label for="floatingSelectGrid">Select a sub-category</label>
                </div>
                </div>
                <div className="col-md">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelectGrid"
                      onChange={this.handlesubCategory}
                    >
                      <option value="">Select Sub-Category</option>
                      <option value="Mobile">Mobile</option>
                      <option value="Electronic Accessories">Electronic Accessories</option>
                      <option value="Cameras">Cameras</option>
                      <option value="SmartTV">SmartTV</option>
                      <option value="Laptops">Laptops</option>
                     
                    </select>
                    <label for="floatingSelectGrid">
                      Select a sub-category
                    </label>
                  </div>
                </div>
            
              <div className="row g-2 mt-3">
                <div className="form-floating col-md">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Product Price"
                    name="product_price"
                    value={this.state.product_price}
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingInput">Product Price</label>
                </div>
                <div className="form-floating col-md">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Product Image URL"
                    name="product_image"
                    value={this.state.product_image}
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingInput">Product Image URL</label>
                </div>
              </div>
              <div className="row g-2 mt-2">
                <div className="form-floating col-md">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Product Brand"
                    name="product_brand"
                    value={this.state.product_brand}
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingInput">Product Brand</label>
                </div>
                <div className="form-floating col-md">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Product Color"
                    name="product_color"
                    value={this.state.product_color}
                    onChange={this.handleChange}
                    required
                  />
                  <label for="floatingInput">Product Color</label>
                </div>
              </div>
              <div className="form-floating col-md">
                <input
                  type="text"
                  className="form-control mt-3"
                  id="floatingInput"
                  placeholder="Product Color"
                  name="product_discription"
                  value={this.state.product_discription}
                  onChange={this.handleChange}
                  required
                />
                <label for="floatingInput">Product Discription</label>
              </div>
            
        
            </div>
            <Link className="btn btn-danger mt-3 mx-3 px-3 " to="/dashboard">
                Back
              </Link>
              <button
                className="btn btn-success mt-3 px-3 float-end"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
              {/* </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default addProduct;
