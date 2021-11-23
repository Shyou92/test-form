import { useState, useEffect } from 'react';
import CommonInfo from '../CommonInfo/CommonInfo';
import Notifications from '../Notifications/Notifications';
import UserInfo from '../UserInfo/UserInfo';
import CopiedPopup from '../CopiedPopup/CopiedPopup';
import { getData } from '../../utils/api';

function Profile() {
  const [copied, setCopied] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getData().then((res) => handleUserData(res));
  }, []);

  const handleUserData = (data) => [setUserData(data)];

  const handleCopied = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  console.log(userData);
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
            <UserInfo
              nickname={userData.nickname}
              status={userData.status}
              email={userData.email}
              telagram={userData.telagram}
            />
            <Notifications />
          </div>
          <CommonInfo
            handleCopied={handleCopied}
            copied={copied}
            userDataWallet={userData.wallet}
          />
        </div>
      </div>
      <CopiedPopup copied={copied} />
    </section>
  );
}

export default Profile;
