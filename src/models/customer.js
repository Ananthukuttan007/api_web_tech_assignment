const mongooose = require('mongoose');

const customerSchema = new mongooose.Schema({
    customer_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
})

const Customer = mongooose.model('customer', customerSchema);

module.exports = Customer;