const express = require("express");
const app = express();
const { connectMongoDb} = require ("./Connection/connection");
const routes = require("./Routers/user");
const path = require ("path");
const cors = require ("cors")

//Variable
const port = 8003;
const username = encodeURIComponent("muhammadwazahatrza092");
const password = encodeURIComponent("244466666");
// ${username}:${password}
// const DB = "mongodb://127.0.0.1:27017/MyNotesDb";
const DB = `mongodb+srv://${username}:${password}@cluster0.roldr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
//Connection 
connectMongoDb(DB , {
  useNewUrlParser : true ,
  useCreateIndex : true ,
  useUnifiedTopology : true ,
  useFindAndModify : false 
}).then(()=>{
  console.log('connection successful');
}).catch((err)=>console.log('error'));


//Middleware
app.use(cors())
// Middleware for Ejs
app.set("view engine","ejs");
app.set("views", path.resolve("./Views"));

//Middleware for rendering form data
app.use(express.json());
app.use(express.urlencoded({extended : false }));

//Middleware to render all the routes
app.use(routes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


