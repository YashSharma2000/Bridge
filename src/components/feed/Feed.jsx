import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'


function Feed() {
  return (
    <div className='feed'>
      <div className="feedContainer">
        <Share />
        <Post />
      </div>
    </div>
  )
}

export default Feed
