import { useState } from 'react';

function SingleCommonInfo({ sign, value }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <p className='sign'>{sign}</p>
      <p className='value   commonInfo__value'>{value}</p>
      {sign === 'Пригласительная ссылка' ? (
        <button className='commonInfo__copy' onClick={handleClick}>
          {copied ? 'Скопировано' : 'Скопировать'}
        </button>
      ) : (
        ''
      )}
    </>
  );
}

export default SingleCommonInfo;
