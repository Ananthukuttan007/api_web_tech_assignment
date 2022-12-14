const router = require('express').Router();
const Customer = require('../models/customer')



router.post('/customer', async (req, res) => {
    try {
        let data = await req.body;
        let newCustomer = new Customer(data);
        newCustomer.save();
        res.status(200).json({
            status: "success",
            result: newCustomer
        })
    }
    catch (e) {
        res.status(400).json({ message: "e.message" })
    }
})
router.put('/customer/:id', async (req, res) => {
    try {
        let data = await req.body;
        await Customer.findByIdAndUpdate(req.params.id, data)
        let updatedCustomer = await Customer.findById(req.params.id)
        res.status(200).json({
            status: "success",
            result: updatedCustomer
        })
    }
    catch (e) {
        res.status(400).json({ message: e.message })
    }
})
router.get('/customer', async (req, res) => {
    try {
        let data = await Customer.find();
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