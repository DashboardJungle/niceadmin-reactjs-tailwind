import CardBox from '../../shared/CardBox';
import TostWithIbutton from './Code/TostWithIButtonCode';
import TostWithIbuttonCode from './Code/TostWithIButtonCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const TostWithButton = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Toast With Button</h4>
            <TostWithIbutton />
          </div>
          <CodeDialog>{TostWithIbuttonCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default TostWithButton;
