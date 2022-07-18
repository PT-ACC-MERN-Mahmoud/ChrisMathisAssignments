import React, {useState, useEffect} from "react";
import CreateProduct from "../components/ProductForm";
import AllProducts from "../components/AllProducts";


const Main = (props) => {

    const [productList, setProductList] = useState([]);

    return(
        <div>
            <CreateProduct productList = {productList} setProductList = {setProductList}/>
            <AllProducts productList = {productList} setProductList = {setProductList}/>
        </div>
    )
}

export default Main;