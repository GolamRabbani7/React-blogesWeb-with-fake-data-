import PropTypes from 'prop-types';
import Frame1 from '../../assets/images/Frame1.png'

export default function Blog({ blog, handlerAddToBookmark,handleMarkAsRead }) {
    // console.log(blog)
    const { id,title, cover_img, author, author_img, hashtag, posted_date, reading_time } = blog;
   
    return (
        <div className='mb-16'>
            <img style={{ width: '100%' }} src={cover_img} alt={` cover picture of the ${title}`} />
            <div className='flex justify-between mt-8'>
                <div className='flex  gap-x-6'>
                    <img className='rounded-full w-12 h-12' src={author_img} alt="" />
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p>{posted_date} </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <p>{reading_time} min read </p>
                    <button onClick={()=>handlerAddToBookmark(blog)} className='m-2 text-red-300'><img className='text-red-300' src={Frame1} alt="" /></button>
                </div>
            </div>
            <h2 className='text-5xl font-bold my-4'>{title}</h2>
            <p className='mb-5'> {
                hashtag.map((hash, idx) => <span key={idx}>{hash}<a href=""></a></span>)
            } </p>

            <button onClick={()=>handleMarkAsRead(id,reading_time)}  className=' text-[#6047EC]'>Mark as read</button>

            <hr />

        </div>
    )
}
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handlerAddToBookmark:PropTypes.func

}
