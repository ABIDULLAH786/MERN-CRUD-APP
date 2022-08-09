import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVER_LINK } from "../Constants";

const TableView = () => {
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
        <>
            <div class="container">
                <div>
                    <h2>Products - Table View
                        <p>
                            <a class="btn btn-primary float-right" href="/cruds/new">Create CRUD</a></p>
                    </h2>
                    <hr />
                </div>
                <table class="table responsive container">
                    <thead>
                        <tr>
                            <th>Tile</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.map((product, index) => (
                            <tr>
                                <td>
                                    <Link className="link-line" to={`/products/remove/${89}`} >dsadad</Link>
                                </td>
                                <td>{product.price}</td>
                                <td>esc</td>
                                <td>iuyfd</td>
                                <td>
                                    <a class="btn btn-warning" href="/cruds/62d2c358dd0b861034bbf70d">View</a>
                                </td>
                                <td>
                                    <a class="btn btn-success" href="/cruds/62d2c358dd0b861034bbf70d/edit">Edit</a>
                                </td>
                                <td>
                                    <a class="btn btn-danger" href="/cruds/62d2c358dd0b861034bbf70d/delete">Delete</a>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableView;