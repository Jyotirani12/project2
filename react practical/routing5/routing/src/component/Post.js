import React from 'react'
import {Link} from 'react-router-dom'
const Post=()=>{
    return(
        <div className="panel panel-primary">
        <div className="panel-heading">
        <h1>Post Page</h1>
        </div>
        <div className="panel-body">
<p> Hello Post pageBut I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-build</p>
        
        <h1>Java</h1>
        {/* <Link to={`/post/Java`} className="btn btn-success">Details</Link> */}
        <Link to={`/post/Java?page=1`} className="btn btn-success">Details</Link>
        <h1>REact</h1>
        {/* <Link to={`/post/React?page=2`} className="btn btn-success">Details</Link> */}
        <Link to={`/post/React?page=2`} className="btn btn-success">Details</Link>
        {/* <h1>Node</h1>
       
        <Link to={`/post/Node`} className="btn btn-success">Details</Link> */}
         <h1>Node</h1>
        <Link to={`/post/Node?page=3`} className="btn btn-success">Details</Link>
        </div>
      
    </div>
     
  
    )
   
}
export default Post;