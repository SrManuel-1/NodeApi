const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
    res.json({
        mensaje: "Hola mundo"
    });
});

app.post("/api/login", (req, res) => {
    const user = {
        id:1,
        nombre: "Manuel Steven",
        email: "manuel@gmail.com",
        contraseña: 12345
    }

    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({
            token
        })
    });
});

app.post("/api/post", Veri (req, res) => {
    res.json({
        mensaje: "Post fue creado"
    });
});

app.listen(3050, function(){
    console.log("Nodejs app Running...");
});