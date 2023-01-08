import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import friend1 from '../../assets/images/friend1.jpg'
import friend2 from '../../assets/images/friend2.jpg'
import friend3 from '../../assets/images/friend3.jpg'
import friend4 from '../../assets/images/friend4.jpg'
import friend5 from '../../assets/images/friend5.jpg'
import friend6 from '../../assets/images/friend6.jpg'
import friend7 from '../../assets/images/friend7.jpg'
import friend8 from '../../assets/images/friend8.jpg'
import friend9 from '../../assets/images/friend9.jpg'
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarListContainer">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeedIcon className='sidebarIcon' />
            <span className="ListItem">Feed</span>
          </li>
          <li className="sidebarListItem">
            <ChatIcon className='sidebarIcon' />
            <span className="ListItem">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayArrowIcon className='sidebarIcon' />
            <span className="ListItem">Videos</span>
          </li>
          <li className="sidebarListItem">
            <GroupsIcon className='sidebarIcon' />
            <span className="ListItem">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BookmarksIcon className='sidebarIcon' />
            <span className="ListItem">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpCenterIcon className='sidebarIcon' />
            <span className="ListItem">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkIcon className='sidebarIcon' />
            <span className="ListItem">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <CalendarMonthIcon className='sidebarIcon' />
            <span className="ListItem">Events</span>
          </li>
          <li className="sidebarListItem">
            <SchoolIcon className='sidebarIcon' />
            <span className="ListItem">Courses</span>
          </li>
        </ul>
        <div className="sidebarButtonContainer">
          <button className="sidebarButton">Show More</button>
        </div>
      </div>
      <hr className='sidebarHr'/>
      <div className="friendListContainer">
        <h3>Friends</h3>
        <ul className="friendList">
          <li className="friend">
            <img src={friend1} alt="not loaded" />
            <span className="friendName">John Hopkin</span>
          </li>
          <li className="friend">
            <img src={friend7} alt="not loaded" />
            <span className="friendName">Angela yu</span>
          </li>
          <li className="friend">
            <img src={friend3} alt="not loaded" />
            <span className="friendName">Robert Kiyosaki</span>
          </li>
          <li className="friend">
            <img src={friend4} alt="not loaded" />
            <span className="friendName">Bernard Arnault</span>
          </li>
          <li className="friend">
            <img src={friend8} alt="not loaded" />
            <span className="friendName">Jessica Junior</span>
          </li>
          <li className="friend">
            <img src={friend6} alt="not loaded" />
            <span className="friendName">Ayush Khurana</span>
          </li>
          <li className="friend">
            <img src={friend2} alt="not loaded" />
            <span className="friendName">Rebbeca</span>
          </li>
          <li className="friend">
            <img src={friend5} alt="not loaded" />
            <span className="friendName">Andrew</span>
          </li>
          <li className="friend">
            <img src={friend9} alt="not loaded" />
            <span className="friendName">Anika Mathew</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
