const router = require('express').Router();
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