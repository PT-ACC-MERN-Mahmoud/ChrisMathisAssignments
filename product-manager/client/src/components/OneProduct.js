import React, {useEffect, useState} from `react`;
import {useParams} from "react-router-dom";
import axios from "axios";

const OneProduct = (props) => {

    const {id} = useParams();
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductDetails(res.data);
            })
            .catch((err) => console.log(err))
    },[]);

    return(
        <div>
            <h1>Product Details</h1>
            <h2>Name: {productDetails.title}</h2>
            <p>Price: {productDetails.price}</p>
            <p>Description: {productDetails.description}</p>

        </div>
    )
}

export default OneProduct;