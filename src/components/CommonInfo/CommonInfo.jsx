import config from '../../utils';
import SingleCommonInfo from '../SingleCommonInfo/SingleCommonInfo';

function CommonInfo() {
  return (
    <section className='commonInfo'>
      {config.commonInfo.map((item) => {
        return (
          <SingleCommonInfo
            key={item.sign}
            sign={item.sign}
            value={item.value}
          />
        );
      })}
      <button className='edit' type='button'>
        Редактировать
      </button>
    </section>
  );
}

export default CommonInfo;
