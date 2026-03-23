import {useState} from "react"
import axios from "axios"
import {useRouter} from "next/router"

export default function Login(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const login = async()=>{

const res = await axios.post("http://localhost:5000/api/auth/login",{

email,
password

})

localStorage.setItem("token",res.data.token)

router.push("/dashboard")

}

return(

<div className="p-10">

<h1 className="text-2xl mb-4">
Login
</h1>

<input
className="border p-2 mr-2"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
className="border p-2 mr-2"
placeholder="Password"
type="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
className="bg-blue-500 text-white px-4 py-2"
onClick={login}
>
Login
</button>

</div>

)

}