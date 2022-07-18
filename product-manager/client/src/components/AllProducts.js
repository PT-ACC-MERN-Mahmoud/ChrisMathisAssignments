import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom;"

const AllProducts = (props) => {

    const {productList, setProductList} = props;
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res)
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err))
    }, [])

    const removeFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/products/${idFromBelow}`)
        .then((res) => {
            console.log(res.data);
            setProductList(productList.filter((product, index) => product._id !==idFromBelow))
        })
        .catch((err) => console.log(err))
    }

    return(
        <div>
            <h1>My Products: </h1>
            {productList.map((product, index) => (
                <div key={product._id}>
                    <Link to={`/product/${product._id}`}>{product.title}</Link>
                    <Link to={`/product/edit/${product._id}`}> || Edit || </Link>
                    <button onClick={() => removeFilter(product._id)}>Remove</button>
                </div>
            ))
            }
        </div>
    )
}

export default AllProducts;