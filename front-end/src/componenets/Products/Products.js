import { useEffect, useState } from "react";
import { SERVER_LINK } from "../Constants";
import axios from "axios"
import { Link } from "react-router-dom";
const Products = () => {

    const [products, setProducts] = useState()
    useEffect(() => {
        const token = localStorage.getItem('user');

        const getProducts = async () => {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`

                },

            };
            const response = await axios.get(`${SERVER_LINK}/products`, requestOptions)
            setProducts(response.data.products)
        }
        getProducts();
    }, [])

    return (
        <div className="container">
            <h1>Products</h1>
            <div className="row">
                {
                    products && products.map((product, index) => (
                        <div className="col-md-4 col-sm-4 col-xs-12 col-lg-4 my-3 " key={index}>
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title text-center">
                                        {product.title}
                                    </h3>
                                </div>
                                <div className="card-body text-center">
                                    <div>
                                        <p><b>Title:</b> {product.title}</p>
                                        <p><b>Price:</b> {product.price}</p>
                                        <p><b>Description:</b> {product.description ? product.description : "N/A"} </p>


                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <Link
                                            to={`/product/edit/${product._id}`}
                                            className="btn btn-success px-4 mx-2"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            to={`/product/remove/${product._id}`}
                                            className="btn btn-danger"
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <b>Created BY:</b> {product.userId.name.toUpperCase()}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Products;