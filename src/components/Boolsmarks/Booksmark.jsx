
import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark';

const Booksmark = ({booksmark,readingtime})=> {
  return (

    <div className="md:w-1/3 bg-gray-200 ml-5 p-3 rounded-lg">
       <h3 className='text-3xl my-5 '>Spent time on read: {readingtime} min</h3>
      <h2 className="text-4xl ml-5 ">BooksMark:{booksmark.length}</h2>
     
      {
        booksmark.map((bookmark,idx)=> <Bookmark 
          bookmark={bookmark}
          key={idx}
          ></Bookmark> )
      }
    </div>

  )
}
export default Booksmark;


Booksmark.propTypes = {
  booksmark:PropTypes.array
}

