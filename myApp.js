let express = require('express');
let app = express();
console.log('Hello World');
/*app.get("/", (req, res)=>{
    res.send("Hello Express");
}); RETO 1*/
/*let absolutePath = __dirname + '/views/index.html'

app.get("/", (req, res)=>{
    res.sendFile(absolutePath);
}); RETO 2*/

let absolutePath = __dirname + '/public';
app.use(express.static(absolutePath));




























module.exports = app;

