import { useRef } from 'react';

function SingleCommonInfo(props) {
  const copyValueRef = useRef();

  const handleClick = () => {
    props.handleCopied();
    handleCopyByClick();
  };

  const handleCopyByClick = (e) => {
    if (props.sign === 'Пригласительная ссылка') {
      const copyText = copyValueRef.current.innerText;
      navigator.clipboard.writeText(copyText);
    }
  };

  return (
    <>
      <p className='sign'>{props.sign}</p>
      <p
        className='value commonInfo__value'
        ref={copyValueRef}
        onClick={handleCopyByClick}
      >
        {props.value}
      </p>
      {props.sign === 'Пригласительная ссылка' ? (
        <button className='commonInfo__copy' onClick={handleClick}>
          Скопировать
        </button>
      ) : (
        ''
      )}
    </>
  );
}

export default SingleCommonInfo;
