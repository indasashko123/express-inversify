import { Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../../../domain";




export interface IUserCreationAttribute {
    name : string;
}

@Table({tableName : "user"})
export class UserModel extends Model<User, IUserCreationAttribute> {

    @Column({type : DataType.INTEGER, autoIncrement : true, unique : true, primaryKey : true})
    id : number;
  
    @Column({type : DataType.STRING, allowNull : false})
    name : string;
}