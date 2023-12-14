import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

app.use(express.static("public"));
app.use(bodyParser.json());//Obtener JSON Data de la Pagina Web y transofrmarla en Objeto JS para usar el req.body
app.use(bodyParser.urlencoded({ extended: true }));//Obtener JSON de Form

let comentarios = [];//no peude ser constante
let idCom=0;
let actualizado = "";
let actualizado1 = "";
let actualizado2 = "";

app.get("/", (req, res) => {
    res.json(comentarios);
});

app.get("/newInfo", (req, res) => {
    res.json(actualizado);
});
app.get("/newInfo1", (req, res) => {
    res.json(actualizado1);
});
app.get("/newInfo2", (req, res) => {
    res.json(actualizado2);
});

app.post("/actualizar", (req, res) => {
    actualizado=req.body.titulo1
    res.json(actualizado);
});

app.post("/actualizar1", (req, res) => {
    actualizado1=req.body.titulo2
    res.json(actualizado1);
});

app.post("/actualizar2", (req, res) => {
    actualizado2=req.body.titulo3
    res.json(actualizado2);
});

app.post("/submit", (req, res) => {
    const newCom = {
        id : idCom+=1,
        autor : req.body.autor,
        correo : req.body.correoContacto,
        contenido : req.body.contenido,
        date : new Date(),
    }
    comentarios.push(newCom);
    res.json(newCom);
});

app.listen(port, () => {
    console.log(`Server listado en el puerto: ${port}`);
});