import './topbar.css'
import profileImage from "../../assets/images/profile_image1.jpg"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topLeft">
                <div className="logo">Bridge</div>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <SearchOutlinedIcon className='searchIcon' />
                    <input placeholder='Search for Posts, Friends and Videos' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon className='icon' />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <MessageIcon className='icon' />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon className='icon' />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <div className="profileImageContainer">
                    <div className="profileImage">
                        <img src={profileImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
