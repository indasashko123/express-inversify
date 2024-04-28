import { Dialect } from "sequelize";
import { Sequelize } from "sequelize-typescript";
import { config } from "../../config";
import { UserModel } from "./models";

export const sequelize = new Sequelize({
    database : config.database.base,
    username : config.database.username,
    password : config.database.password,
    host : config.database.host,
    port : config.database.port,
    dialect : config.database.dialect as Dialect,
    logging : false,
    models : [
        UserModel
    ]
});


export const sync = async() => {
    await sequelize.sync({ force: true});
    console.log("CONNECTED");
}