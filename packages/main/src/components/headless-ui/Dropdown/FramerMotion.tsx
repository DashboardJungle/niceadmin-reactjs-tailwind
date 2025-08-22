import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Framermotion from './Codes/FramerMotionCode';
import FramermotionCode from './Codes/FramerMotionCode.tsx?raw';

const FramerMotion = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Framer Motion</h4>
            <Framermotion />
          </div>
          <CodeDialog>{FramermotionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default FramerMotion;
