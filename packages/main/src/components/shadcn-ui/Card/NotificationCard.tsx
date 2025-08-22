import CardBox from '../../shared/CardBox';
import Notificationcard from './code/NotificationCardCode';
import NotificationcardCode from './code/NotificationCardCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';
const NotificationCard = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <Notificationcard />
          </div>
          <CodeDialog>{NotificationcardCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default NotificationCard;
