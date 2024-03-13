import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Bloges/Blogs'
import Booksmark from './components/Boolsmarks/Booksmark'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >





      <Header></Header>
      <main className='md:flex items-center'>

        <Blogs></Blogs>
        <Booksmark></Booksmark>

      </main>


    </>
  )
}

export default App
