const mongoose = require('mongoose')

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex:true
    }).then(con => {
        
        console.log(`server is connected on ${con.connection.host} `);

    }).catch((e)=>
    {
        console.log(e)
    } )
}
console.log("Database connection is successfully done...")
module.exports = connectDatabase;