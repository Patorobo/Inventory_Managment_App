import React, { Component } from 'react';
import './App.css';
import StockEventsTable from './components/StockEventsTable';
import axios from 'axios';
import AddStockEvent from './components/AddStockEvent';
import AddProduct from './components/AddProduct';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import VisualizeStockEvents from './components/VisualizeStockEvents';


// fetch all of the stock events

// seperate stock events by the different products

// display stock events

class App extends Component{
  state = {
    fetchedProducts: [],
    fetchedStockEvents: []
  }

  //LifeCycle Method
  async componentDidMount(){
    const productsRes = await axios({
        method: "GET",
        
        url: "http://localhost:1337/api/products",
    });
    const stockEventsRes = await axios({
        method: "GET",
        
        url: "http://localhost:1337/api/stockevents",
    });

    const fetchedProducts = productsRes.data.data;
    const fetchedStockEvents = stockEventsRes.data.data;

    this.setState({ fetchedProducts, fetchedStockEvents });
  }

  render(){
    const { fetchedProducts, fetchedStockEvents } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Nav /> 
          
          <center> 
          <div className="wrapper">      
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <AddProduct />
            </Route>
            {/* '/stockevents/add' can be placed above '/stockevents' , only if the <Router> includes the 'exact' property. */}
            <Route exact path="/addstockevents" >
              <AddStockEvent products={fetchedProducts} />
            </Route>
            <Route exact path="/stockevents">
              <h3 className="APtitle" >Available Products</h3>
              <StockEventsTable
                products={fetchedProducts}
                stockEvents={fetchedStockEvents}
                />
            </Route>  
            <Route exact path="/visualizereports">
              <VisualizeStockEvents
               products={fetchedProducts}
               stockEvents={fetchedStockEvents}
              />
            </Route>           
            <Route exact path="/about">
              <About />
            </Route>                     
          </Switch>
          </div>
          </center>  
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
