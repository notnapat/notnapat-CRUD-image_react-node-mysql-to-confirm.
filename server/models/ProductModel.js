//4 // im Sequ, db , // const DataT, con Prod , freeze // expo def Prod // async 
import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const {DataTypes} = Sequelize;

const Product = db.define('product',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName: true
});

export default Product;

(async()=>{
    await db.sync();
})();