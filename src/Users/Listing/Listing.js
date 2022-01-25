import React, { Component } from 'react';
import Header from '../Components/Header';
import "./listing.css";
import axios from "axios";
import ListingDisplay from "./ListingDisplay";
import CostFilter from "../Filter/costFilter";
import SortFilter from '../Filter/sortFilter';
import BrandFilter from "../Filter/brandFilter";


const ProductsUrl = "https://zenkartapi.herokuapp.com/filter";

class Listing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList:''
        }
    }

    setDataPerFilter = (data) => {
        this.setState({ productList: data });
      };

    render() {
        return (
            <>
            <Header/>
            <div className="row mt-2 ">
            <div className="col-md-3 col-lg-2 d-md-block  border  rounded border-primary mx-4 mb-3 filter" >
                <h3 className="text-center">Filters</h3>
                <hr/>
                <div className="row ">
                <div className="nav flex-column col-sm-4 col-md-12 col-lg-12">
                  <SortFilter
                    restPerSort={(data) => {
                      this.setDataPerFilter(data);
                      //console.log("sort", this.setDataPerFilter(data))
                    }}
                  />
                </div>
                <div className="nav flex-column col-sm-4 col-md-12 col-lg-12">
                  <CostFilter
                    restPerCost={(data) => {
                      this.setDataPerFilter(data);
                    //   console.log("cost", this.setDataPerFilter(data))
                    }}
                  />
                </div>
                <div className="nav flex-column col-sm-4 col-md-12 col-lg-12">
                  <BrandFilter
                    restPerBrand={(data) => {
                      this.setDataPerFilter(data);
                    //   console.log("cost", this.setDataPerFilter(data))
                    }}
                  />
                </div>
                </div>
            </div>
            <div className="col-md-8 m-auto col-lg-9 px-md-4   ">
                
                <ListingDisplay productData={this.state.productList} />
            </div> 
            </div>               
            </>
        )
    }

    async componentDidMount() {
        const subCategory = this.props.match.params.id;
        sessionStorage.setItem("subCategory", subCategory);
        const res = await axios.get(`${ProductsUrl}/${subCategory}`);
        this.setState({ productList: res.data });
        // console.log("Product",res.data);
      }
}

export default Listing
