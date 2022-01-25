import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import "./header.css"

const userURL = 'https://zloginbackend.herokuapp.com/api/auth/userinfo'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userdata: ''
    }
  }
  handleLogout = () => {
    this.setState({ userdata: '' })
    localStorage.removeItem('userdata')
    localStorage.removeItem('aps')
    this.props.history.push('/')
  }


  conditionalHeader = () => {
    if (this.state.userdata.name) {
      let data = this.state.userdata;
      let output = [data.name, data.email, data.phone, data.role]
      localStorage.setItem('userdata', output)
      // console.log("output>>", data)
      return (<>
     
      <Link to="/viewOrders"><h5 className=" text-light  mt-2  text-end logedin">Hi {output[0]}</h5></Link>
        <button type="button" className="btn btn-outline-light m-2" onClick={this.handleLogout}>Logout</button>
        
      </>
      )
    } else {
      // console.log("output",this.state.userdata.name)
      return (<>
      <div className=" login">
        <Link to={'/login'} className="btn btn-outline-light  me-3 px-3">Login</Link>
        <Link to={'/register'} className="btn btn-outline-light " >Register</Link>
        </div>
      </>)

    }

  }



  render() {
    // console.log("cart",this.Cart)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-light mx-5" to="/" >Zenkart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {this.conditionalHeader()}
          </div>
        </div>
      </nav>
    )
  }
  componentDidMount() {
    fetch(userURL, {
      method: 'GET',
      headers: {
        'x-access-token': localStorage.getItem('aps')
      }
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userdata: data
        })
      })
  }
}

export default withRouter(Header);
