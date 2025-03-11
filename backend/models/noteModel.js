import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";

const Note = db.define('notes', {
    judul: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 255]
        }
    },
    deskripsi: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
            len: [1, 255]
        }
    }
}, {
    freezeTableName: true,
    timestamps: true
});

export default Note;