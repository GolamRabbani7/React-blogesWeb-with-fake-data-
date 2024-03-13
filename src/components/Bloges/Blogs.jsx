import { useEffect, useState } from "react"


export default function Blogs() {
    const [bloges, setBloges] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=> setBloges(data))
    },[])
    console.log(bloges)
    return (
        <div className="md:w-2/3">

            {

            }
            <h2 className="text-4xl">Bloges</h2>
        </div>
    )
}
