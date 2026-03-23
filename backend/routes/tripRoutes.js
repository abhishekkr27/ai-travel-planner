const router = require("express").Router()
const Trip = require("../models/Trip")
const generateTrip = require("../services/aiService")
const auth = require("../middleware/authMiddleware")

router.post("/create",auth,async(req,res)=>{

const {destination,days,budget,interests}=req.body

const itinerary = await generateTrip({
destination,
days,
budget,
interests
})

const trip = await Trip.create({

userId:req.user.id,
destination,
days,
budget,
interests,
itinerary

})

res.json(trip)

})

module.exports = router