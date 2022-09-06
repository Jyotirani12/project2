import React,{Component,Fragment} from 'react';
import './Header.css'
class Header extends Component{
    constructor(props){
        super(props)
        console.log("inside cinstructor")
        this.state={
            title:'React First App',
            keyword:'user text Here'
        }
        
    }
    handleChange=(event)=>{
        // to update the value of state this.setState() method is called
        console.log(event);
        this.setState({keyword:event.target.value?event.target.value:"User Text Here"})
//console.log("inside handle")
this.props.userInput(event.target.value)

   
    }
    render()
    {
       console.log("inside render")
          //  const myStyle={
            //     header:{
            //         backgroundColor:'tomato'
            //     },
            //     logo:{
            //         textAlign:'center',
            //         fontSize:'30px',
            //         color:'white'
            //     }
            // }
                    //<div>
                    return(  <Fragment>
                        <header>
                    
                        <div className="logo">{this.state.title}</div>
                        <center><input onChange={this.handleChange}/>
                        <div style={{color:'green',fontSize:'20px'}}>{this.state.keyword}</div>
                        </center>
                    </header>
                    {/* <center>
                        <h1>Header Part</h1>
                        </center> */}
                  
                    </Fragment>
                        
                    
                )
    }
}    //<div style={myStyle.logo}>React App</div>
// const Header=()=>
// {
//     return(
//         <div>
//             <center>
//             <h1>Header Part</h1>
//             </center>
//         </div>
        
//     )
// }
export default Header;