import config from '../../utils';
import CommonInfo from '../CommonInfo/CommonInfo';
import Notifications from '../Notifications/Notifications';
import UserInfo from '../UserInfo/UserInfo';

function Profile() {
  return (
    <section className='profile'>
      <h2 className='profile__header'>Профиль</h2>
      <div className='profile__container'>
        <div className='profile__avatar-container'>
          <img src='#' alt='user avatar' className='profile__avatar' />
          <button className='profile__changeAvatar'></button>
        </div>
        <div className='profile__userInfo-container'>
          {config.userInfo.map((user) => {
            return (
              <UserInfo key={user.sign} sign={user.sign} value={user.value} />
            );
          })}
        </div>
        <CommonInfo />
      </div>
      <Notifications />
    </section>
  );
}

export default Profile;
