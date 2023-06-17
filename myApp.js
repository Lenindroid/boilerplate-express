let express = require('express');
let app = express();
/*console.log('Hello World'); -Interactua con la consola
app.get("/", (req, res)=>{
    res.send("Hello Express");
}); -- Enviaste algo al cliente*/
let absolutePath = __dirname + '/views/index.html'

app.get("/", (req, res)=>{
    res.sendFile(absolutePath);
}); //Le diste un html con el método http get que obtuvo la ruta raíz y respondió con el index.

app.use('/public', express.static(__dirname + '/public'));//Montaste un middleware con .use, el middleware obtiene cosas estáticas.

app.get('/json', (req, res)=>{
    res.json({"message": "Hello json"});//Método de res que envía un json.
}); //Enviaste información en un json.


























module.exports = app;

