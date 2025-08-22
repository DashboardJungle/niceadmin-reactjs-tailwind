import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import DefaultListtypo from './Code/DefaultListTypoCode';
import DefaultListtypoCode from './Code/DefaultListTypoCode.tsx?raw';

const DefaultListTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Default list</h4>
            <DefaultListtypo />
          </div>
          <CodeDialog>{DefaultListtypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default DefaultListTypo;
