const express = require("express");
let app = express();
const PORT = 3000;
const path = require("path");
const bodyParser = require("body-parser");
app.set("view engine","pug");
app.set("views",path.resolve("./src/views"));

require('./src/database/connection');
require('./src/bootstrap')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


const router = express.Router();
app.use(router);
const rootPath = path.resolve("./src/views");
app.use(express.static(rootPath));

router.get('/',(req,res)=>{
    // res.send("Hello Node.js");
    res.render('index');
})
router.use((err,req,res) => {
    if(err){
        return res.send(err.message);
    }
});


app.listen(PORT, err =>{
    if(err) return console.log(`Cannot Listen on PORT: ${PORT}`) ;
    console.log(`Server is Listening on : http://localhost:${PORT}/`);
});

