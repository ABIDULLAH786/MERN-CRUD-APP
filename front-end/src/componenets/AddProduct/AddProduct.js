import { useEffect, useState } from "react";
import { SERVER_LINK } from "../Constants";
import axios from "axios"
const AddProduct = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [imageName, setImageName] = useState();
    const [image, setImage] = useState();
    const [imagePreview, setImagePreview] = useState();



    const handleSubmit = async (event) => {

        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: localStorage.getItem("id"), title: title, price: price, description: description })
        };
        await fetch(`${SERVER_LINK}/products/create`, requestOptions);


        setTitle("")
        setPrice(0)
        setDescription("")
    }
    return (
        <div className="container col-md-4 col-sm-4 col-xs-12 col-lg-4 my-5 border">
            <h1 className="text-center my-3">Add Product</h1>
            <div>

                <div className="">
                    <form onSubmit={handleSubmit} multipart="/form-data" className="px-4 py-3">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                className="form-control"
                                id="title"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="price">Price</label>
                            <input type="number"
                                className="form-control"
                                id="price"
                                placeholder="0"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="price">Description</label>
                            <textarea
                                className="form-control"
                                id="price"
                                placeholder="Write Description..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>



                        <button className="btn btn-primary w-100">Add Product</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default AddProduct