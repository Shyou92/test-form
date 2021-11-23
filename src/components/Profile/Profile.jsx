import { useState } from 'react';
import config from '../../utils';
import CommonInfo from '../CommonInfo/CommonInfo';
import Notifications from '../Notifications/Notifications';
import UserInfo from '../UserInfo/UserInfo';
import CopiedPopup from '../CopiedPopup/CopiedPopup';

function Profile() {
  const [copied, setCopied] = useState(false);

  const handleCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className='profile'>
      <h2 className='profile__header'>Профиль</h2>
      <div className='profile__wrap'>
        <div className='profile__avatar-container'>
          <img src='#' alt='user avatar' className='profile__avatar' />
          <button className='profile__changeAvatar'></button>
        </div>
        <div className='profile__container'>
          <div className='profile__userInfo-container'>
            {config.userInfo.map((user) => {
              return (
                <UserInfo key={user.sign} sign={user.sign} value={user.value} />
              );
            })}
            <Notifications />
          </div>
          <CommonInfo onChange={handleCopied} copied={copied} />
        </div>
      </div>
      <CopiedPopup copied={copied} />
    </section>
  );
}

export default Profile;
