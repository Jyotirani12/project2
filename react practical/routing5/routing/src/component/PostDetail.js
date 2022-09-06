import React from 'react'
const PostDetail=(props)=>{
    console.log(props)
    return(
        <div className="panel panel-primary">
            <div className="panel-heading">
            <h1>{props.match.params.topic}</h1>
            </div>
            <div className="panel-body">
<p> Hello {props.match.params.topic}pageBut I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-build</p>
            </div>
            <h1>you r on page {props.location.search.split("=")[1]}</h1>
        </div>
        
    )
   
}
export default PostDetail;