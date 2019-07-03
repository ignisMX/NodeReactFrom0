//Importa las dependencias
import path from 'path';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

//Expone la carpeta public  
app.use(express.static(path.resolve(__dirname, '../../public')));

//Envía todas las peticiones a index.html
app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../public', 'index.html'));
});

//Escucha las peticiones en el puerto especificado
app.listen(PORT);

