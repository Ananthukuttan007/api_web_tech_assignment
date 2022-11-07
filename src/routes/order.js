const router = require('express').Router();
const Order = require('../models/order')
const Inventory = require('../models/inventory')



router.post('/order', async (req, res) => {
    try {
        let data = await req.body;
        let inventoryObject = await Inventory.findById(data.inventoryId)
        inventoryObject.availableQuantity = inventoryObject.availableQuantity - data.quantity
        if (inventoryObject.availableQuantity >= 0) {
            await Inventory.findByIdAndUpdate(data.inventoryId, inventoryObject)
            let newOrder = new Order(data);
            newOrder.save();
            res.status(200).json({
                status: "success",
                result: newOrder
            })
        }
        else {
            res.status(400).json({
                status: "Out Of Stock"
            })
        }
    }
    catch (e) {
        res.status(400).json({ message: "e.message" })
    }
})
router.get('/order', async (req, res) => {
    try {
        let data = await Order.find();
        res.status(200).json({
            status: "success",
            result: data
        })
    }
    catch (e) {
        res.status(400).json({ message: "e.message" })
    }
})


module.exports = router;