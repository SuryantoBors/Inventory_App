const express = require("express");
const router = express.Router();
const itemModel = require("../models/itemModel");

router.post("/createItem", (req,res)=>{
    const newItem = new itemModel({
        itemID : req.body.itemID,
        itemName : req.body.itemName,
        itemQty : req.body.itemQty
    });

    itemModel.findOne({itemID : newItem.itemID}, (err, data)=>{
        if(data){
            res.status(400).send("Item Found");
        }else{
            newItem.save((err,data)=>{
                if(!err){
                    res.status(200).json(data);
                }else{
                    res.status(404).json(err);
                }
            });
        }
    });
});

router.get("/getItemList",(req,res)=>{
    itemModel.find({}, (err,data)=>{
        if(!err){
            res.status(200).json(data);
        }else{
            res.status(400).send("no item");
        }
    });
});

module.exports = router;