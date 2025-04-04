
const estudiantes = require("./24-taller-04-datos.json");
const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3000;

//PUNTO 1
app.get('/users/hobby', (req, res) => {
    const { hobby } = req.query;
    const resultado = estudiantes.filter(user => user.hobbies.includes(hobby));
    res.json(resultado);
});

//PUNTO 2
app.get('/users/exists', (req, res) => {
    const { codigo } = req.query;
    const existe = estudiantes.some(user => user.codigo === codigo);
    res.json({ existe });
});


//PUNTO 3
app.get('/users/hobby/count', (req, res) => {
    const { hobby } = req.query;
    const cantidad = estudiantes.filter(user => user.hobbies.includes(hobby)).length;
    res.json({ cantidad });
});

//PUNTO 4
app.get('/users/is-free', (req, res) => {
    const libres = estudiantes.filter(user => user.hobbies.length < 3);
    res.json(libres);
});

//PUNTO 5
app.post('/users/suggest', (req, res) => {
    const { codigo, hobby } = req.body;
    const user = estudiantes.find(u => u.codigo === codigo);

    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    if (user.hobbies.length >= 3) return res.json({ message: 'Usuario ya tiene 3 hobbies' });

    user.hobbies.push(hobby);
    res.json({ message: 'Hobby agregado', usuario: user });
});

//PUNTO 6
app.post('/users', (req, res) => {
    const usuarioNuevo = req.body;

    if (!usuarioNuevo.codigo || !usuarioNuevo.nombre || !usuarioNuevo.apellido || !usuarioNuevo.hobbies) {
        return res.status(400).json({ error: 'Faltan datos' });
    }

    if (usuarioNuevo.hobbies.length < 2) {
        return res.status(400).json({ error: 'Debe tener al menos dos hobbies' });
    }

    estudiantes.push(usuarioNuevo);
    res.json({ message: 'Usuario agregado', usuario: usuarioNuevo });
});

app.get('/', (req,res)=>{res.send('Servidor funcionando correctamente')});

app.listen(PORT, () => { console.log(`Servidor corriendo en puerto http://localhost:${PORT}`)});