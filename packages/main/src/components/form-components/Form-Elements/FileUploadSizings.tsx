import CardBox from '../../shared/CardBox';
import FileUploadSizing from './Codes/FileUploadSizingsCode';
import FileUploadSizingCode from './Codes/FileUploadSizingsCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const FileUploadSizings = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">File Upload Sizing</h4>
          <FileUploadSizing />
        </div>
        <CodeDialog>{FileUploadSizingCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default FileUploadSizings;
