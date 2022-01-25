import React, { Component } from 'react';
import Header from '../Components/Header';
import Carousel from './Carousel';
import QuickProducts from './QuickProducts';

class Home extends Component {
    render() {
        return (
            <>
               <Header/>
               <Carousel/>
               <QuickProducts/>
            </>
        )
    }
}

export default Home
