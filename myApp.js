require('dotenv').config();
let express = require('express');
let app = express();

app.use('/', (req, res, next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();//Evita que el server se quede atorado.
});

let absolutePath = __dirname + '/views/index.html'
app.get("/", (req, res)=>{
    res.sendFile(absolutePath);
}); //Le diste un html con el método http get que obtuvo la ruta raíz y respondió con el index.

app.use('/public', express.static(__dirname + '/public'));//Montaste un middleware con .use, el middleware obtiene cosas estáticas.

app.get('/json', (req, res)=>{
    process.env.MESSAGE_STYLE
    if (process.env.MESSAGE_STYLE == 'uppercase') {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});//Método de res que envía un json.
    }
}); 

















module.exports = app;

