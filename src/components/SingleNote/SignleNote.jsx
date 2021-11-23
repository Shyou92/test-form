function SingleNote({ text }) {
  return (
    <div className='form__container'>
      <label className='form__switch'>
        <input className='form__item form__label-text' type='checkbox' />
        <span className='form__slider round'></span>
      </label>
      <span className='sign form__label-text'>{text}</span>
    </div>
  );
}

export default SingleNote;
