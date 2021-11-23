import SingleNote from '../SingleNote/SignleNote';
import config from '../../utils';

function Notifications() {
  return (
    <section className='notifications'>
      <h4 className='sign notifications__header'>Отправка уведомлений</h4>
      {config.notifications.map((item) => {
        return <SingleNote key={item.text} text={item.text} />;
      })}
    </section>
  );
}
export default Notifications;
