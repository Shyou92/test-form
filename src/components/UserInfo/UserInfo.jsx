function userInfo({ sign, value }) {
  return (
    <>
      <p className='profile__sign'>{sign}</p>
      <p className='profile__value'>{value}</p>
    </>
  );
}

export default userInfo;
