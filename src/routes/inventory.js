const router = require('express').Router();
const { findById } = require('../models/inventory');
const Inventory = require('../models/inventory')



router.post('/inventory', async (req, res) => {
    try {
        let data = await req.body;
        let newInventory = new Inventory(data);
        newInventory.save();
        res.status(200).json({
            status: "success",
            result: newInventory
        })
    }
    catch (e) {
        res.status(400).json({ message: "e.message" })
    }
})
router.put('/inventory/:id', async (req, res) => {
    try {
        let data = await req.body;
        await Inventory.findByIdAndUpdate(req.params.id, data)
        let updatedInventory = await Inventory.findById(req.params.id)
        res.status(200).json({
            status: "success",
            result: updatedInventory
        })
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
})
router.get('/inventory', async (req, res) => {
    try {
        let data = await Inventory.find();
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