import { Sequelize } from "sequelize";

// Koneksi ke database
const db = new Sequelize('notes_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

// Fungsi untuk memeriksa koneksi
(async () => {
    try {
        await db.authenticate();  
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default db;
