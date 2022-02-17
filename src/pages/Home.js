import React from "react";
import Helmet from "../components/Helmet";
import ProductListing from "../components/ProductListing";

const Home = () => {
    return (
        <Helmet title="Home">
            <ProductListing />
        </Helmet>
    );
};

export default Home;
