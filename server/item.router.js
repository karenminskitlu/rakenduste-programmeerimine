const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("./item.model.js");

//Deletes an item

router.delete("/items/:itemId", (req, res) => {
    Item.deleteOne({
        "_id": mongoose.Types.ObjectId(req.params.itemId)
    }, (err) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        console.log("Deletion successful");
        return res.sendStatus(204);
    });
});

//Create a new item

router.post("/", (req, res) => {
    const props = {
        imgSrc: "example.invalid",
        title: "dreamcatcher blue",
        price: 650,
        category: "dreamcatchers",
    };

    const item1 = new Item(props);
    item1.save(err => {
        if (err) {
            console.log("Error: ", err);
            res.send(500);
            return;
        }
        console.log("Success createItem");
        res.send(201);
    });
});

/* ----- New queries, using POST to differentiate ----- */

// Returns an item

router.get("/:itemId", (req, res) => {
    Item.findById(req.params.itemId, function (err, item) {
        if (err) {
            console.log("Error: ", err);
            res.status(500).send(err);
            return;
        }
        res.send(item);
    });
});

//Returns all items

router.get("/", (req, res) => {
    Item.find({}, function (err, items) {
        if (err) {
            console.log("Error: ", err);
            res.status(500).send(err);
            return;
        }
        res.send(items);
    });
});

module.exports = router;