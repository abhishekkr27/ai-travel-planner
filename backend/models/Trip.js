const mongoose = require("mongoose")

const TripSchema = new mongoose.Schema({

userId:String,

destination:String,

days:Number,

budget:String,

interests:[String],

itinerary:Object,

budgetEstimate:Object,

hotels:[String]

})

module.exports = mongoose.model("Trip",TripSchema)