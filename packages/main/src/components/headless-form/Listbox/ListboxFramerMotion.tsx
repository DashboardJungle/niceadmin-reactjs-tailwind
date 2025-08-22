import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import ListboxFramermotion from './Codes/ListboxFramerMotionCode';
import ListboxFramermotionCode from './Codes/ListboxFramerMotionCode.tsx?raw';

const ListboxFramerMotion = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Listbox With Framer Motion </h4>
            <ListboxFramermotion />
          </div>
          <CodeDialog>{ListboxFramermotionCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ListboxFramerMotion;
