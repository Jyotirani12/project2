import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
// const App=()=>
// {
//     return(
//         <div>
//             <Header/>
//  <h1>Hi React</h1>
//         <h2>React code</h2>
//         <Footer/>
//         </div>
       
//     )
// }
//export default App;
//or
//ReactDOM.render(<App/>,document.getElementById('root'));
//New syntax
const container=document.getElementById('root');
const root=ReactDOM.createRoot(container);
root.render(<Home/>);

