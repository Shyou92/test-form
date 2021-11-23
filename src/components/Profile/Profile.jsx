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

  return (
    <section className='profile'>
      <h2 className='profile__header'>Профиль</h2>
      <div className='profile__wrap'>
        <div className='profile__avatar-container'>
          <img src='#' alt='user avatar' className='profile__avatar' />
          <button className='profile__changeAvatar'></button>
        </div>
        <UserInfo
          nickname={userData.nickname}
          status={userData.status}
          email={userData.email}
          telegram={userData.telegram}
        />

        <Notifications />
        <CommonInfo
          handleCopied={handleCopied}
          copied={copied}
          userDataWallet={userData.wallet}
        />
      </div>
      <CopiedPopup copied={copied} />
    </section>
  );
}

export default Profile;
