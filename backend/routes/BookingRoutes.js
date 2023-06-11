const bookingRouter = require('express').Router();
const bookingModel = require('../model/bookingDetailsModel');

bookingRouter.post('/order', async (req, res) => {
    try {
        const { userId, carname, carNumber, perKm, image, origin, destination, startDate, endDate, BookingId, bookingDate, bookingTime, carId, priceperkm, pricing, Tax, Subtotal, mapImg } = req.body;
        const newOrder = new bookingModel({
            userId,
            carname,
            carNumber,
            perKm,
            image,
            origin,
            destination,
            startDate,
            endDate,
            BookingId,
            bookingDate,
            bookingTime,
            carId,
            priceperkm,
            pricing,
            Tax,
            Subtotal, mapImg
        })
        await newOrder.save().then(record => {
            res.status(201).send({
                status: 'success',
                message: 'Booked Successfully',
                admin: record
            })
        }).catch(err => {
            console.log(err);
            res.status(400).send({
                status: 'failed',
                message: 'failed to Book'
            })
        })
    }
    catch (err) {
        res.status(400).send(err.message);
    }
})


bookingRouter.get('/my-orders', async (req,res)=>{
    
    try{
        const userId = req.query.userId;
        await bookingModel.find({userId}).then(orders=>{
            res.status(200).send({
                status: 'success',
                message: 'Orders fetched',
                record: orders
            })
        }).catch(err=>{
            console.log(err);
            res.status(400).send({
                status: 'failed',
                message: 'failed to fetch'
            })
        })
    }
    catch(err){
        res.status(400).send(err.message);
    }
})

bookingRouter.put('/my-orders/:id', async(req,res)=>{
    const updatedData = req.body;
    bookingModel.findOneAndUpdate({_id: req.id},updatedData,{new:true}).then(bookUpdate=>{
        if(!bookUpdate){
            return res.status(400).send({
                status : 'failed',
                message: 'booking not found'
            })
        }

        res.status(200).send({
            status: 'success',
            message: 'booking updated successfully',
            record: bookUpdate
        })
    }).catch(err=>{
        console.log(err)
        res.status(400).send({
            status: 'failed',
            message: 'failed to update booking'
        })
    })
})

bookingRouter.delete('my-orders/:id', (req,res)=>{
    bookingModel.deleteOne({_id: req.id, user: req.userId}).then(booking => {
        res.status(200).send({
            status: 'success',
            message: "booking deleted successfully",
            record: booking
        });
    }).catch(err => {
        res.status(500).json({
            message: "Failed to delete booking",
            data: err
        });
    });
})

