import { Sequelize } from "sequelize";

const db = new Sequelize('tugasserra', 'root', '', {
    host: '34.27.28.164',
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
