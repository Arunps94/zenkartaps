import React, { Component } from 'react';
import axios from "axios";

const productUrl = "https://zenkartapi.herokuapp.com/filter"

class BrandFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: ""
        }

    }
    brandFilter = (event) => {
        let sub = sessionStorage.getItem("subCategory");
        let brand = event.target.value;
        console.log("brand",brand)
        let filterUrl;
        if(brand=== ""){
            filterUrl = `${productUrl}/${sub}`
        }else{
            filterUrl = `${productUrl}/${sub}?brand=${brand}`
        }
        axios.get(filterUrl)
        .then((res)=>{this.props.restPerBrand(res.data)})
    }

    getUnique = (arr, comp) => {

        // store the comparison  values in array
        const unique = arr.map(e => e[comp])

            // store the indexes of the unique objects
            .map((e, i, final) => final.indexOf(e) === i && i)

            // eliminate the false indexes & return unique objects
            .filter((e) => arr[e]).map(e => arr[e]);

        return unique;
    }

    renderBrandFilter = (data) => {
        if (data) {
            let product = this.getUnique(data,"product_brand");
            // console.log("p", product);
            return product.map((items) => {
                //console.log("brand",items.product_brand);
                return (
                    <div class="form-check"onChange={this.brandFilter} >
                        <input class="form-check-input" type="radio" value={items.product_brand} id="flexCheckDefault" name="brand"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            {items.product_brand}
                        </label>
                    </div>)
            })
        }

    }


    render() {
        return (
            < >
                <h5 className="text-center">Brand</h5>
                <div className="mx-3">
                {this.renderBrandFilter(this.state.products)}
                </div>
            </>
        )
    }

    async componentDidMount() {
        const productId = sessionStorage.getItem("subCategory");
        const res = await axios.get(`${productUrl}/${productId}`);
        this.setState({ products: res.data });
        // console.log("products",res.data)
    }

}

export default BrandFilter
