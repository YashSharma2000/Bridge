import './share.css'
import profileImg from '../../assets/images/profile_image1.jpg'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

function Share() {
  return (
    <div className='share'>
      <div className="shareContainer">
        <div className="shareTop">
            <img src={profileImg} alt="" className='shareImg'/>
            <input placeholder='What&#39;s in your mind' className="shareInput" />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor='tomato'/>
                    <span className="shareOptionName">Photos/Videos</span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor='blue'/>
                    <span className="shareOptionName">Tag</span>
                </div>
                <div className="shareOption">
                    <LocationOnIcon htmlColor='green'/>
                    <span className="shareOptionName">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='gold'/>
                    <span className="shareOptionName">Feelings</span>
                </div>
            </div>
            <div className="shareButton">
                <button>Share</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Share
