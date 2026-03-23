const Trip = require("../models/Trip")
const generateTrip = require("../services/aiService")

exports.createTrip = async(req,res)=>{

const {destination,days,budget,interests} = req.body

const aiResult = await generateTrip({
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
itinerary:aiResult

})

res.json(trip)

}