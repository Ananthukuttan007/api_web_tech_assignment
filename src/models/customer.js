const mongooose = require('mongoose');

const customerSchema = new mongooose.Schema({
    customer_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const Customer = mongooose.model('customer', customerSchema);

module.exports = Customer;