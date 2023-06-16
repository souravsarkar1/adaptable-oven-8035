const express = require('express');
const { connection } = require('./db');
const { userRoute } = require('./routes/user.routes');


require('dotenv').config();
const app = express();
app.use(express.json());

app.use('/users', userRoute);

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log(`port is running at ${process.env.port}`);
        console.log("connected to db");
    } catch (error) {
        console.log(error.message);
        console.log("Sometthing went to wrong");
    }
})