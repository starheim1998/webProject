import './App.css';

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Item from "./pages/Item/Item";
import Home from "./pages/Home/Home";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import SearchPage from "./pages/SearchPage/SearchPage";
import AccountPage from "./pages/AccountPage/AccountPage";


function App() {



    return (
    <div className="App">
      <Header/>
      <Switch>
          <Route path="/item/:id" component={Item}/>
          <Route path="/shoppingCart/shoppingCart" component={ShoppingCart}/>
          <Route path="/search" component={SearchPage}/>
          <Route path="/accountPage/accountPage" component={AccountPage}/>
          <Route exact path="/" component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
