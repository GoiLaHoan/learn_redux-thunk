import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Header from "./components/Header";
import Page404 from "./components/Page404";
function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route
                        path="/product/:productId"
                        component={ProductDetail}
                    />

                    <Route path="*" exact={true} component={Page404}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
