function SingleNote({ text }) {
  return (
    <div className='form__container'>
      <label className='form__switch'>
        <input
          className='form__item search-short-movies__input'
          type='checkbox'
        />
        <span className='form__slider round'></span>
      </label>
      <span className='sign form__label-text'>{text}</span>
    </div>
  );
}

export default SingleNote;
