const mongoose = require("mongoose")

const carSchema = mongoose.Schema({
    carname: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    milage: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    avalableFrom: {
        type: String
    },
    availableTill: {
        type: String
    },
    perKm: {
        type: String
    },
    description: {
        type: String
    },
    carDetails: {
        type: String
    },
    details: {
        type: String
    },
    AdminId: {
        type: String
    }
})

const carDetails = new mongoose.model("CarDetails", carSchema)

module.exports = carDetails