let bodyParser = require('body-parser');
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
        res.json({"message": "Hello json".toUpperCase()});
    } else {
        res.json({"message": "Hello json"});//Método de res que envía un json.
    }
}); 

app.get('/now', (req, res, next)=>{
    req.time = new Date().toString();//Segundo parámetro: middleware. Añade info al handler.
    next();//Ejecutuar el handler.
}, (req, res)=>{
    res.json({"time": req.time});//El handler.
});

app.get('/:word/echo', (req, res)=>{
    res.json({"echo": req.params.word.toString()});
}); //Enviamos una petición de un input.

app.get('/name', function(req, res){
    
});//Esto muy probablemente está mal.

app.use(bodyParser.urlencoded({extended: false})); ////Extended indica el tipo de parse. Al usar extended=false los valores son cadenas o arrays.
//Permite trabajar con post requests.

app.route('/name').get((req, res)=>{
    let first = req.query.first;//Accede a los datos de un query input
    let last = req.query.last;
    let jsonObj = {name: first + " " + last};
    res.send(jsonObj);
}).post((req, res)=>{
    let first = req.body.first;//Accede a los datos de un post
    let last = req.body.last;
    let todo = first + " " + last;
    let jsonObj = {name: todo};
    res.send(jsonObj);
});//Route te permite usar varios métodos http con la misma ruta
module.exports = app;

