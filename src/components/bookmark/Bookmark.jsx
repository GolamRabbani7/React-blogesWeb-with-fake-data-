import PropTypes from 'prop-types';

export default function Bookmark({ bookmark }) {
    const { title } = bookmark
    return (



        <div className='p-3  bg-white m-3 rounded-xl '>
            <h3 className='text-2xl '>{title} </h3>
        </div>

    )
}
Bookmark.prototype = {
    bookmark: PropTypes.object
    // readingtime:PropTypes.Requireable<number>
}