const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId, ref:'User', required: true
    },
    carname: {
        type: String,

    },
    carNumber:{
        type: String,
    },
    perKm: {
        type: Number,

    },
    image: {
        type: String,

    },
    origin: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true

    },
    endDate: {
        type: String,
        required: true
    },
    BookingId: {
        type: String,
    },
    bookingDate: {
        type: String,

    },
    bookingTime: {
        type: String,

    }, 
    carId: {
        type: String
    },
    priceperkm: {
        type: Number
    },
    pricing: {
        type: Number
    },
    Tax: {
        type: Number
    },
    Subtotal: {
        type: Number
    },
    mapImg: {
        type: String
    }


})

const Orders = new mongoose.model("orderdata", OrderSchema)

module.exports = Orders