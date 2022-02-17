import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { fetchProducts } from "../redux/actions/productsActions";

const ProductListing = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return <ProductComponent />;
};

export default ProductListing;
