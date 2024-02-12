const express = require('express');
const serverconfig=require(`./configs/server.config.js`);

//....................................................for connecting the datbase....................................//

const mongoose = require('mongoose');
// logic to connect to mongodb and create an admin user.
// need to have the mongodb up and running in your local machine. 
const dbConfig = require(`./configs/db.config`);
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error",()=>{
    console.log("Error while connecting to DB");
});

db.once("open", ()=>{
    console.log("DB is connected");
});




//...........................................for catching the express on server........................................//
const app = express();

app.listen(serverconfig.PORT , ()=>{
    console.log(`server runs at ${serverconfig.PORT}`);
});