const Form = () => {
    return (
        <div className="container border bg-light">
            <form action="" method="" class="row g-3 mt-2 ms-5">
                <div class="col-auto">
                    <label for="inputName2" class="visually-hidden">Name</label>
                    <input type="text" class="form-control" id="inputName2" placeholder="Name" />
                </div>
                <div class="col-auto">
                    <label for="staticEmail2" class="visually-hidden">Email</label>
                    <input type="text" class="form-control" id="staticEmail2" placeholder="Email" />
                </div>

                <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-3">Add Data</button>
                </div>
            </form>
        </div>
    )
}
export default Form;