import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

// Pages
// import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
 
      <Navbar />
      
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route path="/cart" component={Cart} />
      </Switch>
    

    </div>
  );
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;

