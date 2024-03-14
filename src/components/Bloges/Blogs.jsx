import { useEffect, useState } from "react"
import Blog from "../Blog/Blog";
import propsTypes from "prop-types"

export default function Blogs({ handlerAddToBookmark,handleMarkAsRead }) {
    const [bloges, setBloges] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBloges(data))
    }, [])
    // console.log(bloges)
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Bloges: {bloges.length}</h2>
            {
                bloges.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handlerAddToBookmark={handlerAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }

        </div>
    )
}
Blogs.propsTypes = {
    handlerAddToBookmark: propsTypes.func
}