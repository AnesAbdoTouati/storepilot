import "dotenv/config";

import app from "./app.js";
import { pool } from "./config/db.js";


const port = process.env.PORT || 5000;


const start = async () => {

    try {

        await pool.query("SELECT 1");

        console.log("Database connected");


        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });


    } catch (error) {

        console.error("Database connection failed:", error);

    }

};


start();