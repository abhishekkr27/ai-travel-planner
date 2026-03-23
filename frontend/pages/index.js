import Link from "next/link"

export default function Home(){

return(

<div className="flex flex-col items-center justify-center h-screen">

<h1 className="text-4xl font-bold mb-6">
AI Travel Planner
</h1>

<div className="space-x-4">

<Link href="/login">
<button className="bg-blue-500 text-white px-4 py-2 rounded">
Login
</button>
</Link>

<Link href="/register">
<button className="bg-green-500 text-white px-4 py-2 rounded">
Register
</button>
</Link>

</div>

</div>

)

}