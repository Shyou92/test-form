function CopiedPopup({ copied }) {
  return (
    <section className={`copiedPopup ${copied ? 'copiedPopup_active' : ''}`}>
      <p className='copiedPopup__text'>Скопировано!</p>
    </section>
  );
}

export default CopiedPopup;
