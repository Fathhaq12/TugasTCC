import { Sequelize } from "sequelize";

const db = new Sequelize('catatanserra', 'root', '', {
    host: '34.27.28.164',
    dialect: 'mysql',
});

export default db;
