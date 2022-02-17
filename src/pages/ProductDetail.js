import React from "react";
import Helmet from "../components/Helmet";
import { useSelector } from "react-redux";
import ProductDetails from "../components/ProductDetails";

const ProductDetail = () => {
    let product = useSelector((state) => state.product);
    const { title } = product;

    return (
        <Helmet title={title}>
            <ProductDetails />
        </Helmet>
    );
};

export default ProductDetail;
