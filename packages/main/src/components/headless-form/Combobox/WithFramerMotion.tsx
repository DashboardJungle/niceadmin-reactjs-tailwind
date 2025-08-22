import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import WithFramermotion from './Codes/WithFramerMotionCode';
import WithFramermotionCode from './Codes/WithFramerMotionCode.tsx?raw';

const WithFramerMotion = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">With FramerMotion</h4>
            <WithFramermotion />
          </div>
          <CodeDialog>{WithFramermotionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default WithFramerMotion;
