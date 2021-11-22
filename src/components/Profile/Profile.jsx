import config from '../../utils';
import CommonInfo from '../CommonInfo/CommonInfo';
import Notifications from '../Notifications/Notifications';
import UserInfo from '../UserInfo/UserInfo';

function Profile() {
  return (
    <section className='profile'>
      <div className='profile__header-contaiener'>
        <h2 className='profile__header'>Профиль</h2>
        <button className='profile_changeAvatar'></button>
      </div>
      <div className='profile__container'>
        <img src='' alt='user avatar' className='profile__avatar' />
        <div className='profile__userInfo-container'>
          {config.userInfo.map((user) => {
            return (
              <UserInfo key={user.sign} sign={user.sign} value={user.value} />
            );
          })}

          <CommonInfo />
        </div>
        <Notifications />
      </div>
    </section>
  );
}

export default Profile;
