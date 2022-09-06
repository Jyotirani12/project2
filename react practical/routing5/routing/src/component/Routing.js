import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetail from './PostDetail';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Link} from 'react-router-dom'
const Routing=()=>{
    return(
        <BrowserRouter>
        <div className="container">
        <Header/>
        

     <Route exact path="/" component={Home}/>
     <Route exact path="/post" component={Post}/>
     <Route path="/profile" component={Profile}/>
     <Route path="/post/:topic" component={PostDetail}/>
        <Footer/>
        </div>
        </BrowserRouter>
        
     
       
    )
}
export default Routing;