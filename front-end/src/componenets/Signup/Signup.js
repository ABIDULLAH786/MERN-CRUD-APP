import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_LINK } from "../Constants";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        console.log(`
      name: ${name}
      email: ${email}
      password: ${password}
    `);

        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, email: email, password: password })
        };
        const response = await fetch(`${SERVER_LINK}/users/signup`, requestOptions);
        // const data = await response.json();
        // console.log(data);
        // console.log(response.status);
        if (response.status === 200) {
            setName("")
            setEmail("")
            setPassword("")
            navigate('/signin')
        }


    }
    return (
        <div className="container col-md-4 col-sm-4 col-xs-12 col-lg-4 my-5 border">
            <h1 className="text-center my-3">Sign Up</h1>
            <div>

                <div className="">
                    <form onSubmit={handleSubmit} className="px-4 py-3">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                className="form-control"
                                id="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group my-4">
                            <label htmlFor="password">Password</label>
                            <input
                                type={password}
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className="btn btn-primary w-100">Sign up</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
export default Signup;