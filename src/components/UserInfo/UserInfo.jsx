function userInfo({ nickname, status, email, telegram }) {
  console.log();
  return (
    <>
      <p className='sign'>Никнейм</p>
      <p className='value'>{nickname}</p>
      <p className='sign'>Статус</p>
      <p className='value'>{status}</p>
      <p className='sign'>Следующий статус</p>
      <p className='value'>sonya</p>
      <p className='sign'>Электронная почта</p>
      <p className='value'>{email}</p>
      <p className='sign'>Telegram</p>
      <p className='value'>{telegram}</p>
    </>
  );
}

export default userInfo;
