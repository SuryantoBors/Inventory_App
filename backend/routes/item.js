const express = require("express");
const router = express.Router();
const itemModel = require("../models/itemModel");

router.get("/getItemList", (req, res) => {
  itemModel.find({}, (err, data) => {
    if (!err) {
      res.status(200).json(data);
    } else {
      res.status(400).send("no item");
    }
  });
});

router.post("/createItem", (req, res) => {
  const newItem = new itemModel({
    itemID: req.body.itemID,
    itemName: req.body.itemName,
    itemQty: req.body.itemQty,
  });

  itemModel.findOne({ itemID: newItem.itemID }, (err, data) => {
    if (data) {
      res.status(400).send("Item Found");
    } else {
      newItem.save((err, data) => {
        if (!err) {
          res.status(200).json(data);
        } else {
          res.status(404).json(err);
        }
      });
    }
  });
});

router.get("/getItemDetails/:itemId", (req, res) => {
  const reqItemId = req.params.itemId;
  itemModel.findById(reqItemId, (err, data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      console.log(err);
    }
  });
});

router.put("/editItemDetails/:itemId", (req, res) => {
  const reqItemId = req.params.itemId;
  const editedValue = {
    itemID: req.body.itemID,
    itemName: req.body.itemName,
    itemQty: req.body.itemQty,
  };
  itemModel.findByIdAndUpdate(reqItemId, editedValue, (err, data) => {
    if (data) {
      res.status(200).send("success");
    } else {
      res.status(400).send(err);
    }
  });
});

router.delete("/deleteProdut/:itemId", (req, res) => {
  const reqItemId = req.params.itemId;

  itemModel.findByIdAndDelete(reqItemId, (err, data) => {
    if (data) {
      res.status(200).send(`Success deleted item ${reqItemId}`);
    } else {
      res.status(404).send(err);
    }
  });
});

module.exports = router;
