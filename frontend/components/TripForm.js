import {useState} from "react"
import axios from "axios"
import Itinerary from "./Itinerary"

export default function TripForm(){

const [destination,setDestination] = useState("")
const [days,setDays] = useState("")
const [result,setResult] = useState(null)

const createTrip = async()=>{

const res = await axios.post(
"http://localhost:5000/api/trips/create",
{

destination,
days,
budget:"medium",
interests:["food","culture"]

},
{

headers:{
authorization:localStorage.getItem("token")
}

}
)

setResult(res.data)

}

return(

<div>

<input
className="border p-2 mr-2"
placeholder="Destination"
onChange={(e)=>setDestination(e.target.value)}
/>

<input
className="border p-2 mr-2"
placeholder="Days"
onChange={(e)=>setDays(e.target.value)}
/>

<button
className="bg-green-500 text-white px-4 py-2"
onClick={createTrip}
>
Generate Trip
</button>

{result && <Itinerary data={result}/>}

</div>

)

}