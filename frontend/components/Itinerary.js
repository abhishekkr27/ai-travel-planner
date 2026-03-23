export default function Itinerary({data}){

return(

<div className="mt-6">

<h2 className="text-xl font-bold mb-2">
Generated Itinerary
</h2>

<pre className="bg-gray-100 p-4">
{JSON.stringify(data,null,2)}
</pre>

</div>

)

}