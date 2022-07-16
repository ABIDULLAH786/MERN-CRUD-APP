const Home = () => {
    const link = "https://github.com/ABIDULLAH786";
    const target = "_blank";

    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center text-center">
            <div>
                <h1>MERN Stack CRUD</h1>
                <p>
                    <b>Front-end</b>: React.js v18+
                </p>
                <p>
                    <b>Back-end</b>: Node.js, Express.js
                </p>
                <p>
                    <b>Database</b>: MongoDB
                </p>
                <p>
                    <b>Developed By</b>: Abidullah
                    <p>
                        <a href={link} target={target}>
                            Github Profile
                        </a>
                    </p>
                </p>
            </div>
        </div>
    );
}
export default Home