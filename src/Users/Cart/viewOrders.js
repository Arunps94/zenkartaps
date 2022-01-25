import React, { Component } from 'react'
import axios from 'axios';
import ViewDisplay from "./ViewDisplay";
import Header from "../Components/Header";

const ordersURL = "https://zenkartapi.herokuapp.com/orders";
const putURL = "https://zenkartapi.herokuapp.com/updateStatus";

class ViewOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders:'',
            status:'' 
        }
    }


   
    render(){
        console.log("orders",this.state.orders)
        if(localStorage.getItem('aps') == null){
            return(
                <>
                <Header/>
                <h5 className="text-center">Login First to See your orders</h5>
                </>
            )
        }
        return(
            <>
            <Header/>
            <ViewDisplay bookdata={this.state.orders}/>
            </>
        )
    }


    async componentDidMount() {
        if(this.props.location){
            var qparams = this.props.location.search;
            // console.log("q",qparams)
            if(qparams){
                var data = {
                    "date":qparams.split('&')[2].split('=')[1],
                    "bank_status":qparams.split('&')[0].split('=')[1],
                    "bank":qparams.split('&')[3].split('=')[1]
                }
                // console.log("data",data)
                var id = qparams.split('&')[1].split('=')[1].split('_')[1];
                // console.log("id",id)
                fetch(`${putURL}/${id}`,{
                    method: 'PUT',
                    headers:{
                       'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then((res) => res.json())
                .then((data) =>{
                    this.setState({status:"Delivered"})
                })

            }
        }
        const res = await axios.get(`${ordersURL}?email=${localStorage.getItem('userdata').split(',')[1]}`)
        this.setState({orders:res.data.reverse()})     
        console.log("o",data)
    }
}



export default ViewOrders;
