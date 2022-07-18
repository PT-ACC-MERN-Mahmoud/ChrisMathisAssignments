import React, {useEffect, useState} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {

    const {id} = useParams();
    const [productDetails, setProductDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductDetails(res.data);
            })
            .catch((err) => console.log(err))
    },[id]);

    const removeFilter = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            console.log(res.data);
            navigate("/")
        })
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <h1>Product Details</h1>
            <h2>Name: {productDetails.title}</h2>
            <p>Price: {productDetails.price}</p>
            <p>Description: {productDetails.description}</p>
            <Link to={"/"}>Home || </Link>
            <button onClick={removeFilter}>Remove</button>
        </div>
    )
}

export default OneProduct;