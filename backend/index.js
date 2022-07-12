const db = require('../models/index.js')
const express = require('express');
const { SELECT } = require('sequelize/types/query-types');

const app = express();

const users = [{
    nombre: "maria",
    apellido: "Jaquez",
    edad: 10,
 },
 {
    nombre: "yuri",
    apellido: "Jaquez",
    edad: 30,
 },
 {
    nombre: "felix",
    apellido: "Jaquez",
    edad: 30,
 },
];
db.sequelize.query('SELECT 1')
app.use('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    res.json(userId);
});
// app.use('/terapeuta', (req, res) => {
//     const terapeutaId = req.params.id;
//     res.json(terapeutaId);
// })
// app.use('/ejercicios', (req, res) => {
//     const ejer = req.params.id;
//     res.json(ejer);
// })

app.use('/usuarios', (req, res) => {
    res.json(users);
});

app.use('/', (req, res)=> {
    res.send("prueba");
});
app.listen(3001, () => {
    console.log("servidor");
});