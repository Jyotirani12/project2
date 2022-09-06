import React, { Component } from 'react';
import './details.css';
// import axios from 'axios';
import {Link} from 'react-router-dom';
// const url="https://apidrop1.herokuapp.com/product/1";
 const url = "https://apidrop1.herokuapp.com/details/"
class Details extends Component {
    constructor(props) {
        console.log("inside constructor detail");
        super(props)
        this.state = {
            dressdetails:'',
            categoryId: sessionStorage.getItem('categoryId')


        }
    }
    render() {
        let dressdetails=this.state.dressdetails
        console.log("inside render detail")
        return (
            <>
                <div id="main">
<h1>Hello{dressdetails.product_name}</h1>
{dressdetails.Image}
                    {this.renderData} 
                </div>
            </>
        )
    }

    componentDidMount() {

        console.log("inside compo detail");

        let productId = this.props.location.search.split("=")[1]
        fetch(`${url}${this.state.categoryId}?productId=${productId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => { console.log(data[0]); this.setState({ dressdetails: data[0] }) })

    }
    renderData = (dressdetails) => {
        
       
                return (
                    <div id="imgdiv" key={dressdetails._id}>
                        <h1>hello{dressdetails.product_name}</h1>
                        <img src={dressdetails.Image} alt="" />

                    </div>
                )
            }
        }

    

    

export default Details;