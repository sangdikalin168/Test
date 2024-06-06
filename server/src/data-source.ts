import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    port: 3306,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + "/entities/*{.js,.ts}"],
    synchronize: true,
})