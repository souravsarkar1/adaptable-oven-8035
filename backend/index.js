const express = require('express');
require('dotenv').config();
const { connection } = require('./db');

const app = express();

app.listen(process.env.port, async () => {
    try {

        await connection;
        console.log("Connected To Data Base");
        console.log(`Server Is Running At Port No. ${process.env.port}`);

    } catch (error) {
        console.log(error.message);
        console.log("Something Went To Wrong");
    }
})