const OpenAI = require("openai")

const client = new OpenAI({
apiKey:process.env.OPENAI_API_KEY
})

async function generateTrip(data){

const prompt = `
Create a ${data.days} day travel itinerary for ${data.destination}

Budget type: ${data.budget}

Interests: ${data.interests}

Return JSON format:

{
days:[
{day:1, activities:["place","place"]}
],
budget:{
flights:"",
hotel:"",
food:"",
activities:"",
total:""
},
hotels:["hotel1","hotel2","hotel3"]
}
`

const response = await client.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{role:"user",content:prompt}
]

})

return response.choices[0].message.content

}

module.exports = generateTrip