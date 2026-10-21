const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTION
mongoose.connect(connectionString).then(res => {
    console.log("Database Connection Successful....");    
}).catch(err => {
    console.log("Database Connection Failed");
    console.log(err);   
})