import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Bloges/Blogs'
import Booksmark from './components/Boolsmarks/Booksmark'
import Blog from './components/Blog/Blog';

function App() {

  const [booksmark, setBookmarks]=useState([]);
  const [readingtime, setReadingtime]=useState(0)

  const handlerAddToBookmark=(blog)=>{
    const newBooksmark=[...booksmark, blog];
    setBookmarks(newBooksmark)
    
  }
  const handleMarkAsRead=(id,time)=>{
    setReadingtime(readingtime+time)
    // console.log( "martk read id" , id)
    
    //remove the blog from bookmark
    const remainingBooksmark=booksmark.filter(bookmark=>bookmark.id !==id )
  }




  return (
    < >



      <Header></Header>
      <main className='md:flex   p-4 max-w-7xl mx-auto '>

      <Blogs handlerAddToBookmark={handlerAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      
        <Booksmark readingtime={readingtime}   booksmark={booksmark}></Booksmark>

      </main>


    </>
  )
}

export default App
