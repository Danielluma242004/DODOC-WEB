import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 5000;

const db = new pg.Client({ //Crear conexion
    user: "postgres",
    host : "localhost",
    database : "DODOC",
    password : "Nuttela24",
    port : 5432,
  });

db.connect();

app.use(express.static("public"));
app.use(bodyParser.json());//Obtener JSON Data de la Pagina Web y transofrmarla en Objeto JS para usar el req.body
app.use(bodyParser.urlencoded({ extended: true }));//Obtener JSON de Form

let nombrePantalla = 0;

app.get("/", async (req, res) => {
    res.json(nombrePantalla);
})

app.post("/submit", async (req, res) => {
    const emailUser = req.body.loginEmail;
    const passwordUser = req.body.loginPassword;

    const data = await db.query("SELECT name FROM users WHERE email LIKE ($1) AND password LIKE ($2)", [emailUser, passwordUser]);
    
    if (data.rows.length !== 0) {
        nombrePantalla=data.rows[0].name;
        console.log(nombrePantalla);
    } else {
        console.log("Contraseña incorrecta");
    }
    res.json(nombrePantalla);
});

app.post("/LogOut", async (req, res) => {
    nombrePantalla = 0;
    res.json(nombrePantalla);
});

app.post("/register", async (req, res) => {
    const nameUser = req.body.registerName;
    const emailUser = req.body.registerEmail;
    const passwordUser = req.body.registerPassword;

    const data = await db.query("SELECT email FROM users WHERE email LIKE $1", [emailUser]);
    
    if (data.rows.length !== 0) {
        console.log("Usuario ya registrado");
    } else {
        await db.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [nameUser, emailUser, passwordUser]);
        nombrePantalla=nameUser;
    }
    res.json(nombrePantalla);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });