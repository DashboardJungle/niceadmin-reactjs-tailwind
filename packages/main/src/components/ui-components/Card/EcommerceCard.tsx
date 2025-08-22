import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Ecommercecard from './Code/EcommerceCardCode';
import EcommercecardCode from './Code/EcommerceCardCode.tsx?raw';

const EcommerceCard = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">E-commerce card</h4>
            <Ecommercecard />
          </div>
          <CodeDialog>{EcommercecardCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default EcommerceCard;
