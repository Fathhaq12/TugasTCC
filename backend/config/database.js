import { Sequelize } from "sequelize";

const db = new Sequelize('tugas3serra', 'root', 'kenariku003', {
    host: '104.154.46.103',
    dialect: 'mysql',
    logging: false
});

(async () => {
    try {
        await db.authenticate();  
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

export default db;
