import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Dashboard from "./WebPages/Dashboard/Dashboard-Main/Dashboard";
import Footer from "./WebPages/Footer/Footer";
import Header from "./WebPages/Header/Header";
import AddProduct from "./WebPages/Home-Section/Add-Product/AddProduct";
import AllProduct from "./WebPages/Home-Section/All-Product/Search-GetProduct/AllProduct";
import Home from "./WebPages/Home-Section/Home/Home";
import FishMeat from "./WebPages/Home-Section/Home/Home-Catagory-Products/Fish-Meat/FishMeat";
import Fruits from "./WebPages/Home-Section/Home/Home-Catagory-Products/Fruits/Fruits";
import Grocery from "./WebPages/Home-Section/Home/Home-Catagory-Products/Grocery/Grocery";
import SnacksAndBeverage from "./WebPages/Home-Section/Home/Home-Catagory-Products/Snacks-And-Beverage/SnacksAndBeverage";
import Vegetables from "./WebPages/Home-Section/Home/Home-Catagory-Products/Vegetables/Vegetables";
import SingleItemProduct from "./WebPages/Home-Section/Home/SingleItemProduct/SingleItemProduct";



function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/vegetable">
            <Vegetables></Vegetables>
          </Route>
          <Route path="/fruits">
            <Fruits></Fruits>
          </Route>
          <Route path="/snacks">
            <SnacksAndBeverage></SnacksAndBeverage>
          </Route>
          <Route path="/meat-fish">
            <FishMeat></FishMeat>
          </Route>
          <Route path="/grocery">
            <Grocery></Grocery>
          </Route>
          <Route path="/single-item/:serviceId">
            <SingleItemProduct></SingleItemProduct>
          </Route>
          <Route path="/add-product">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/all-products">
            <AllProduct></AllProduct>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
