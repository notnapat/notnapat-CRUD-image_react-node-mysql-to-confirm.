//3 imp Seq, const db, exprot
import { Sequelize } from "sequelize";

const db = new Sequelize('crud_image_mysql','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;