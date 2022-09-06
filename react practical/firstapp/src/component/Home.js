import React,{Component} from 'react';

import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './db.json';





class Home extends Component {

    constructor(props){
        super(props)

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }

    filterProduct = (keyword) => {
        let output = this.state.productData.filter((data) => {
            return (data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1)
        })

        this.setState({filteredData:output})
    }

    render(){
        return (
            <>
                <Header userInput={(data) => {this.filterProduct(data)}}/>
                <ProductDisplay prodData={this.state.filteredData}/>
                <Footer year="2022" month="Aug"/>
            </>
        )
    }
    
}
export default Home;

//export default App;
//or
//ReactDOM.render(<App/>,document.getElementById('root'));
//New syntax
// const container=document.getElementById('root');
// const root=ReactDOM.createRoot(container);
// root.render(<App/>);

