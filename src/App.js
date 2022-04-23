import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./WebPages/Header/Header";
import AddProduct from "./WebPages/Home-Section/Add-Product/AddProduct";
import Home from "./WebPages/Home-Section/Home/Home";
import FishMeat from "./WebPages/Home-Section/Home/Home-Catagory-Products/Fish-Meat/FishMeat";
import Fruits from "./WebPages/Home-Section/Home/Home-Catagory-Products/Fruits/Fruits";
import SnacksAndBeverage from "./WebPages/Home-Section/Home/Home-Catagory-Products/Snacks-And-Beverage/SnacksAndBeverage";
import Vegetables from "./WebPages/Home-Section/Home/Home-Catagory-Products/Vegetables/Vegetables";

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
          <Route path="/add-product">
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
