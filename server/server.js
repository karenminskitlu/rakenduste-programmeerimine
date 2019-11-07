const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
require("dotenv").config();

const itemRouter = require("./item.js");
const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-3oxqq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(itemRouter);
app.use(express.static("dist"));

function listen(){
    // Heroku needs process.env.PORT
    app.listen(PORT, () => {
        console.log("Server started");
        console.log(`http://localhost:${PORT}`);
    });
}

mongoose.connect(DB_URL)
.then(() => {
    console.log("DB access successful");
    listen();
})
.catch(err => {
    console.log("DB access error: ", err);
});

/**
 * GET all items
 */
app.get("/api/items",(req, res)=>{
    res.json(DB.getItems());
});

app.get("/items/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});