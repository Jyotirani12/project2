import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
const App=()=>{
 return(
  <><h1>Hi from react</h1>
<Header/>
<Home/>
<Footer/>
  </>
  
 )
}
// ReactDOM.render(<App/>,document.getElementById('root'));
const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(<App/>)
