import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Imagepopover from './Code/ImagePopoverCode';
import ImagepopoverCode from './Code/ImagePopoverCode.tsx?raw';

const ImagePopover = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Image popover</h4>
            <Imagepopover />
          </div>
          <CodeDialog>{ImagepopoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ImagePopover;
