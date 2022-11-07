const mongooose = require('mongoose');

const orderSchema = new mongooose.Schema({
    customer_id: {
        type: String,
        required: true
    },
    inventoryId: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const Order = mongooose.model('order', orderSchema);

module.exports = Order;