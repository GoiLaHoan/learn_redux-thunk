import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Page404 from "./components/Page404";
function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={ProductListing} />
                    <Route
                        path="/product/:productId"
                        component={ProductDetails}
                    />

                    <Route path="*" exact={true} component={Page404}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
