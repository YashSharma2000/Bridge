import './post.css'
import postProfileImage from '../../assets/images/friend8.jpg'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import postImage from '../../assets/images/lasvegasImage.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
function Post() {
    return (
        <div className='post'>
            <div className="postContainer">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={postProfileImage} alt="not loaded" className="postProfileImg" />
                        <span className="postDetails">
                            <span className="postUsername">Jessica Junior</span>
                            <span className="postTime">10 mins ago</span>
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">It's my Hometown</div>
                    <img src={postImage} alt="not loaded" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <div className="likeIcons">
                            <ThumbUpOffAltIcon htmlColor='blue' className='likeIcon'/>
                            <FavoriteBorderIcon htmlColor='red' className='likeIcon'/>
                        </div>
                        <span className="likeCounter">32 people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="commentCounter">9 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
