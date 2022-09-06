import React from 'react';
import Routing from './component/Routing'
import ReactDOM from 'react-dom/client';
// import {BrowserRouter,Route,Link} from 'react-router-dom'
// const App=()=>{
//     return(
//         <BrowserRouter>
//         <div>
//         <Header/>
//         <Link to="/">Home</Link>
//         <Link to="/post">Post </Link>
//         <Link to="/profile">Profile</Link>

//      <Route exact path="/" component={Home}/>
//      <Route path="/post" component={Post}/>
//      <Route path="/profile" component={Profile}/>
//         <Footer/>
//         </div>
//         </BrowserRouter>
        
     
       
//     )
// }
const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(<Routing/>)