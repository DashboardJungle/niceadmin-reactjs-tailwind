import CardBox from '../../shared/CardBox';
import Actioncard from './Code/ActionCardCode';
import ActioncardCode from './Code/ActionCardCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const ActionCard = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">CTA card</h4>
            <Actioncard />
          </div>
          <CodeDialog>{ActioncardCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ActionCard;
