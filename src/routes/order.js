const router = require('express').Router();
const Order = require('../models/order')
const Inventory = require('../models/inventory')
const Customer = require('../models/customer')


router.post('/order', async (req, res) => {
    try {
        let data = await req.body;
        let inventoryObject = await Inventory.findById(data.inventoryId)
        inventoryObject.availableQuantity = inventoryObject.availableQuantity - data.quantity
        let purchasingCustomer = await Customer.findById(data.customer_id);
        let customerBalance = purchasingCustomer.balance - (data.quantity * inventoryObject.price);
        if (inventoryObject.availableQuantity >= 0) {
            if (customerBalance >= 0) {
                await Inventory.findByIdAndUpdate(data.inventoryId, inventoryObject)
                await Customer.findByIdAndUpdate(data.customer_id, { balance: customerBalance })
                let newOrder = new Order(data);
                newOrder.save();
                res.status(200).json({
                    status: "success",
                    result: newOrder
                })
            }
            else {
                res.status(400).json({
                    status: "insufficient balance"
                })
            }
        }
        else {
            res.status(400).json({
                status: "Out Of Stock"
            })
        }
    }
    catch (e) {
        res.status(400).json({ message: e.message })
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