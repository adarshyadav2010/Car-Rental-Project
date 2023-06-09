const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8000;
const connectionString = process.env.DB_URL
const app= require('./app');

async function connection() {
    await mongoose.connect(connectionString).then(()=>{
        console.log("Connected to Database");
    })
    .catch(()=>{
        console.log("Cannot be connected to Database");
    });
    app.listen(port, ()=>{
        console.log(`Server is live at port :- ${port}`)
    })
};
connection();



