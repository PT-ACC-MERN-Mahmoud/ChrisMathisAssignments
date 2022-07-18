import React, {useState} from 'react';
import axios from 'axios';

const CreateProduct = (props) => {
    const {productList, setProductList} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = ("");
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setProductList([...productList, res.data]);
                setTitle("");
                setPrice("");
                setDescription("")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title: </label>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        type="text"
                    />
                </div>

                <br />

                <div>
                    <label>Price: </label>
                    <input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        name="price"
                        type="number"
                    />
                </div>

                <br />

                <div>
                    <label>Description: </label>
                    <input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        name="desctiption"
                        type="text"
                    />
                </div>

                <br />

                <input type="submit" value="Add Product" />

            </form>
        </div>
    )
}


export default CreateProduct;