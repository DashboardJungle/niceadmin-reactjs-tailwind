import CardBox from '../../shared/CardBox';
import FileUploadele from './Codes/FileUploadEleCode';
import FileUploadeleCode from './Codes/FileUploadEleCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const FileUploadEle = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-2">File Upload</h4>
          <FileUploadele />
        </div>
        <CodeDialog>{FileUploadeleCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default FileUploadEle;
