import CardBox from '../../shared/CardBox';
import Dropzone from './Codes/DropZoneCode';
import DropzoneCode from './Codes/DropZoneCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const DropZone = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">DropZone</h4>
          <Dropzone />
        </div>
        <CodeDialog>{DropzoneCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default DropZone;
