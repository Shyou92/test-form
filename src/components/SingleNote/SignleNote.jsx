function SingleNote({ text }) {
  return (
    <>
      <label>
        <input type='checkbox' className='form__item' />
        <span className='form__label-text'>{text}</span>
      </label>
    </>
  );
}

export default SingleNote;
