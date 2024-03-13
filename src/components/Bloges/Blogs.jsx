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
        <div>
            <h3>hello</h3>
        </div>
    )
}
