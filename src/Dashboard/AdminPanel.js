import React, { Component } from 'react'
import Header from './Component/Header';
import Table from './Component/Table';
import "./admin.css"
class AdminPanel extends Component {
    render() {
        return (
            <>
                <Header/>
                <Table/>
            </>
        )
    }
}

export default AdminPanel;
