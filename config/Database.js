import {Sequelize} from "sequelize";

const db = new Sequelize('PWL_04', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;