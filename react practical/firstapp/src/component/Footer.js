import React from 'react';
const Footer=(props)=>
{
    return(
        //<div>
        <React.Fragment>
            <hr/>
            <hr/>
            <center>
                <h3> &copy;Footer {props.year} , {props.month}</h3>
            </center>
       
        </React.Fragment>
           
    )
}
export default Footer;