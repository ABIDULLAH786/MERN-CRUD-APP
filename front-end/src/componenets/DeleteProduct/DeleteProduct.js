import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { SERVER_LINK } from "../Constants";
import axios from "axios"
const DeleteProduct = () => {
    var { id } = useParams();
    let navigate = useNavigate();
    let [product, setProduct] = useState();

    async function deleteProductById() {
        let response = await fetch(`${SERVER_LINK}/products/remove/${id}`)
        if (response.status === 200)
            navigate("/products")
    }

    function backToProductPage() {
        navigate("/products")
    }

    useEffect(() => {
        async function getProduct() {
            try {
                const response = await axios.get(`${SERVER_LINK}/products/search/${id}`)
                setProduct(response.data.product)
            } catch (err) {
                console.log(err)
            }

        }
        getProduct()
    }, [])

    return (
        <div className="container col-md-4 col-sm-4 col-xs-12 col-lg-4 my-3 ">
            {product && <div className="card">
                <div className="card-header">
                    <h3 className="card-title text-center">
                        Delete Product
                    </h3>
                </div>
                <div className="card-body text-center">
                    <div>
                        <p><b>Title:</b> {product.title}</p>
                        <p><b>Description:</b> {product.description ? product.description : "N/A"} </p>


                    </div>
                    <div className="d-flex justify-content-center">
                        <button onClick={backToProductPage} className="btn btn-secondary  mx-2">
                            Cancel
                        </button>
                        <button onClick={deleteProductById} className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>}
        </div>
    )
}
export default DeleteProduct