
const app = require('./index.js')
const dotenv = require('dotenv')
const connectDatabse = require('./config/connection')
//setting up config file 

dotenv.config({path:"./config/config.env"})
//connecting to db 
connectDatabse();


const server =  app.listen(process.env.PORT, ()=>
{
    console.log(`Server is port ${process.env.PORT} click here ${process.env.SERVER_URL}`);
    // console.log(`Server is port ${process.env.PORT} in ${process.env.NODE_ENV}`);
})

// const server = app.listen(5010,function(){
//     console.log("server is running on port 5010");
//  });
// console.log("stating server: "+server)