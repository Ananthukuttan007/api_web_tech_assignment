const mongooose = require('mongoose');

const inventorySchema = new mongooose.Schema({
    inventoryType: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    availableQuantity: {
        type: Number,
        required: true
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const Inventory = mongooose.model('inventory', inventorySchema);

module.exports = Inventory;