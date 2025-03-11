import express from 'express';
import db from './config/database.js';  
import noteRoute from './routes/noteRoute.js';
import cors from 'cors';  
import Note from './models/noteModel.js';

const app = express();

app.use(cors());
app.use(express.json());  

app.use('/notes', noteRoute);  

app.post('/notes', async (req, res) => {
    try {
        const { judul, deskripsi } = req.body;
        await Note.create({ judul, deskripsi });
        res.status(201).json({ msg: "Note Created" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" });
    }
});

(async () => {
    try {
        await db.authenticate();
        console.log('Database connected...');
        await db.sync({ force: false });
        console.log('Database synchronized');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

app.listen(5000, () => {
    console.log('Server up and running on http://localhost:5000');
});