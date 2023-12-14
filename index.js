import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
const APIURL = "http://localhost:4000";
const loginURL = "http://localhost:5000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());//Analizar el cuerpo de las solicitides HTTP en formato JSON, Ej. solicitudes POST o PUT o PATCH, cuando se nevian datos a traves de una API REST

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        const actualizadoData = await axios.get(`${APIURL}/newInfo`);
        const actualizadoData1 = await axios.get(`${APIURL}/newInfo1`);

        console.log(response.data);
        console.log(actualizadoData.data);
        console.log(actualizadoData1.data);

        res.render("index.ejs", {
            nameUser:response.data,
            actualizadoData:actualizadoData.data,
            actualizadoData1:actualizadoData1.data,
        });
    } catch (error) { }  
});

app.post("/actualizar", async (req, res) => {
    try {
        const response = await axios.post(`${APIURL}/actualizar`, req.body);
        console.log(response.data);
        res.redirect("/");
    }catch(error){}
});

app.post("/actualizar1", async (req, res) => {
    try {
        const response = await axios.post(`${APIURL}/actualizar1`, req.body);
        console.log(response.data);
        res.redirect("/");
    }catch(error){}
});

app.post("/actualizar2", async (req, res) => {
    try {
        const response = await axios.post(`${APIURL}/actualizar2`, req.body);
        console.log(response.data);
        res.redirect("/introduccion");
    }catch(error){}
});

app.get("/introduccion", async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        const actualizadoData2 = await axios.get(`${APIURL}/newInfo2`);

        console.log(response.data);
        console.log(actualizadoData2.data);

        res.render("introduccion.ejs", {
            nameUser:response.data,
            actualizadoData2:actualizadoData2.data,
        });
    } catch (error) {
        
    }  
});

app.post("/submit", async (req, res) =>{
    try {
        const response = await axios.post(`${APIURL}/submit`, req.body);
        console.log(response.data);
        res.redirect("/contacto");
    } catch (error) {
        
    }
});

app.post("/login", async (req, res) => {
    try {
        const response = await axios.post(`${loginURL}/submit`, req.body);
        console.log(response.data);
        res.redirect("/");
    }catch(error){}
});

app.get("/LogOut", async (req, res) => {
    try {
        const response = await axios.post(`${loginURL}/LogOut`, req.body);
        console.log(response.data);
        res.redirect("/");
    }catch(error){}
});

app.post("/createUser", async (req, res) => {
    try {
        const response = await axios.post(`${loginURL}/register`, req.body);
        console.log(response.data);
        res.redirect("/");
    }catch(error){}
});



app.get("/comoFunciona", async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        console.log(response.data);
        res.render("comoFunciona.ejs", {
            nameUser:response.data,
        });
    } catch (error) {
        
    }  
});

app.get("/algoritmos", async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        console.log(response.data);
        res.render("algoritmos.ejs", {
            nameUser:response.data,
        });
    } catch (error) {
        
    }  
});

app.get("/arquitectura", async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        console.log(response.data);
        res.render("arquitectura.ejs", {
            nameUser:response.data,
        });
    } catch (error) {
        
    }  
});

app.get("/limitaciones", async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        console.log(response.data);
        res.render("limitaciones.ejs", {
            nameUser:response.data,
        });
    } catch (error) {
        
    }  
});

app.get("/supremacia", async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        console.log(response.data);
        res.render("supremacia.ejs", {
            nameUser:response.data,
        });
    } catch (error) {
        
    }  
});

app.get("/conceptos", async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        console.log(response.data);
        res.render("conceptos.ejs", {
            nameUser:response.data,
        });
    } catch (error) {
        
    }  
});

app.get("/criptografia", async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        console.log(response.data);
        res.render("criptografia.ejs", {
            nameUser:response.data,
        });
    } catch (error) {
        
    }  
});

app.get("/optimizacion",async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        console.log(response.data);
        res.render("optimizacion.ejs", {
            nameUser:response.data,
        });
    } catch (error) {
        
    }  
});

app.get("/simulacion",async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        console.log(response.data);
        res.render("simulacion.ejs", {
            nameUser:response.data,
        });
    } catch (error) {
        
    }  
});

app.get("/contacto",async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        const comentarios = await axios.get(`${APIURL}/`);

        console.log(response.data);
        console.log(comentarios.data);

        res.render("contacto.ejs", {
            nameUser:response.data,
            comentarios:comentarios.data,
        });
    } catch (error) { }  
    
});

app.get("/register",async (req, res) => {
    try {
        const response = await axios.get(`${loginURL}/`);
        console.log(response.data);
        res.render("register.ejs", {
            nameUser:response.data,
        });
    } catch (error) {
        
    }  
});

app.listen(port, (req, res) => {
    console.log(`Listening in port ${port}`);
})