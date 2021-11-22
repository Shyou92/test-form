function SingleCommonInfo({ sign, value }) {
  return (
    <>
      <p className='commonInfo__sign'>{sign}</p>
      <p className='commonInfo__value'>{value}</p>
      {sign === 'Пригласительная ссылка' ? (
        <button className='commonInfo__copy'>Скопировать</button>
      ) : (
        ''
      )}
    </>
  );
}

export default SingleCommonInfo;
