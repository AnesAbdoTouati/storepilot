import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import sequelize from "./config/db.config.js";


const port = process.env.PORT || 5000;

const start = async () => {
    try {
        console.log("DB PASS:", process.env.DB_PASSWORD);
        await sequelize.authenticate();
        console.log("Db connected");
        app.listen(port, () => {
            console.log("Server is Runnig on Port:", port);
        })
    }
    catch (err) {
        console.log(err);
    }
}
start();