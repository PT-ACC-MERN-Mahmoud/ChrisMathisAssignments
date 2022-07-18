import React, {useEffect, useState} from `react`;
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

    return(
        <div>
            <h1>My Products: </h1>
            {productList.map((product, index) => (
                <Link to={`/product/${product._id}`} key={product._id}>{product.title}</Link>
            ))}
        </div>
    )
}

export default AllProducts;