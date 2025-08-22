import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import IconListtypo from './Code/IconListTypoCode';
import IconListtypoCode from './Code/IconListTypoCode.tsx?raw';

const IconListTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Icons</h4>
            <IconListtypo />
          </div>
          <CodeDialog>{IconListtypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default IconListTypo;
