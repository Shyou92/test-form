import { useRef } from 'react';

function CommonInfo(props) {
  const copyValueRef = useRef();

  const handleClick = () => {
    props.handleCopied();
    handleCopyByClick();
  };

  const handleCopyByClick = () => {
    if (copyValueRef) {
      const copyText = copyValueRef.current.innerText;
      navigator.clipboard.writeText(copyText);
    }
  };

  return (
    <section className='commonInfo'>
      <p className='sign'>Адрес кошелька</p>
      <p
        className='value commonInfo__value'
        ref={copyValueRef}
        onClick={handleCopyByClick}
      >
        {props.userDataWallet}
      </p>
      <p className='sign'>Пригласительная ссылка</p>
      <p
        className='value commonInfo__value'
        ref={copyValueRef}
        onClick={handleCopyByClick}
      >
        https://infinity.network.io/j/vitalist
      </p>
      <button className='commonInfo__copy' onClick={handleClick}>
        Скопировать
      </button>
      <button className='edit' type='button'>
        Редактировать
      </button>
    </section>
  );
}

export default CommonInfo;
