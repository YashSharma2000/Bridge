import './rightbar.css'
import friendOnline from '../../assets/images/friend3.jpg'
import birthdayBox from '../../assets/images/birthday.png'
function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarContainer">
        <div className="notifications">
          <h3>Notifications</h3>
          <div className="notificationList">
            <div className="notification">Angela has posted something</div>
            <div className="notification">Angela has posted something</div>
            <div className="notification">Angela has posted something</div>
            <div className="notification">Angela has posted something</div>
            <div className="notification">Angela has posted something</div>
            <div className="notification">Angela has posted something</div>
            <div className="notification">Angela has posted something</div>
            <div className="notification">Angela has posted something</div>
            <div className="notification">Angela has posted something</div>
          </div>
        </div>
        <hr className='rightbarHr' />
        <div className="birthdayReminder">
          <h3>Birthdays</h3>
          <img src={birthdayBox} alt="not loaded" className="birthdayBox" />
          <div className="birthdays">John Hopkins and <b style={
            {
              cursor: 'pointer',
              textDecoration: 'underline'
            }
          }>3 others</b> birthday today</div>
        </div>
        <hr className='rightbarHr' />
        <div className="friendsOnline">
          <h3>Friends Online</h3>
          <div className="friendsOnlineList">
            <div className="onlineFriend">
              <div className="imgContainer">
                <img src={friendOnline} alt="" className="onlineFriendProfileImg" />
              </div>
              <span className="onlineFriendUsername">Robert Kiyosaki</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
