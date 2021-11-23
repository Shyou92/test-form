function userInfo({ nickname, status, email, telegram }) {
  console.log(telegram);
  return (
    <section className='userInfo'>
      <span className='sign'>Никнейм</span>
      <span className='value'>{nickname}</span>
      <span className='sign'>Статус</span>
      <span className='value'>{status}</span>
      <span className='sign'>Следующий статус</span>
      <span className='value'>sonya</span>
      <span className='sign'>Электронная почта</span>
      <span className='value'>{email}</span>
      <span className='sign'>Telegram</span>
      <span className='value'>{telegram}</span>
    </section>
  );
}

export default userInfo;
