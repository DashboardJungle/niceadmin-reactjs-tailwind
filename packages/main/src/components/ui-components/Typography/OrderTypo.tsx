import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Ordertypo from './Code/OrderTypoCode';
import OrdertypoCode from './Code/OrderTypoCode.tsx?raw';

const OrderTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Ordered list</h4>
            <Ordertypo />
          </div>
          <CodeDialog>{OrdertypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default OrderTypo;
