import React, { Component } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "../Listing/listing.css"

const costUrl = "https://zenkartapi.herokuapp.com/filter";

class CostFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // value:''
        }
    }

    handlecostFilter = (event) => {
        let costId = sessionStorage.getItem("subCategory");
        let cost = event.target.value;
        // let lcost = cost[0];
        // let hcost = 100000;
        let filterUrl;
        if (event.target.value === "0") {
            filterUrl = `${costUrl}/${costId}?lcost=${0}&hcost=${0}`;
            // console.log("zero",filterUrl);
          } else {
            filterUrl = `${costUrl}/${costId}?lcost=${0}&hcost=${cost}`;
          }
        
        axios.get(filterUrl).then((res) => {
            this.props.restPerCost(res.data); 
            console.log("restPerCost",res.data)   
        });
       
    };



    render() {
        return (
            <div >
                <h5 className="text-center">Cost </h5>
                <Box sx={{ width: 150 }} className="mx-3">
                    <Slider 
                    className="cost"
                        getAriaLabel={() => 'price range'}
                        step={1000}
                        defaultValue={1000}
                         max= {200000}
                        // value={this.state.value}
                        onChange={this.handlecostFilter}
                        valueLabelDisplay="auto"
                        // getAriaValueText={valuetext}
                    />
                </Box>

            </div>
        )
    }
}

export default CostFilter
