import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_LINK } from "../Constants";

const UpdateProduct = (props) => {
    const { id } = useParams();
    const [productId, setProductId] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    console.log(id)
    function fillData(data) {
        setProductId(data._id)
        setTitle(data.title)
        setPrice(data.price)
        setDescription(data.description)
    }
    useEffect(() => {
        async function getProduct() {
            try {
                const response = await axios.get(`${SERVER_LINK}/products/search/${id}`)
                console.log(response.data.product)
                fillData(response.data.product);
            } catch (err) {
                console.log(err)
            }

        }
        getProduct()
    }, [])

    const handleSubmit = async (event) => {

        event.preventDefault();
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ _id: productId, title: title, price: price, description: description })
        };
        const response = await axios.patch(`${SERVER_LINK}/products/update/${id}`, requestOptions);

        console.log(response)

    }
    return (
        <div className="container col-md-4 col-sm-4 col-xs-12 col-lg-4 my-5 border">
            <h1 className="text-center my-3">Update Product Details</h1>
            <div>

                <div className="">
                    <form onSubmit={handleSubmit} className="px-4 py-3">
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

                        <button className="btn btn-primary w-100">Update Product</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default UpdateProduct