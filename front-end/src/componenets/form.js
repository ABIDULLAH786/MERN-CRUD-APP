const Form = () => {
    return (
        <div className="container border bg-light">
            <form action="" method="" className="row g-3 mt-2 ms-5">
                <div className="col-auto">
                    <label for="inputName2" className="visually-hidden">Name</label>
                    <input type="text" className="form-control" id="inputName2" placeholder="Name" />
                </div>
                <div className="col-auto">
                    <label for="staticEmail2" className="visually-hidden">Email</label>
                    <input type="text" className="form-control" id="staticEmail2" placeholder="Email" />
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Add Data</button>
                </div>
            </form>
        </div>
    )
}
export default Form;