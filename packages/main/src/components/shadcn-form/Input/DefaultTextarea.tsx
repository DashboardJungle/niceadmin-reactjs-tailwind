import CardBox from '../../shared/CardBox';
import Dafaulttextarea from './code/DafaultTextareacode';
import DafaulttextareaCode from './code/DafaultTextareacode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const DefaultTextarea = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold">Default Textarea</h4>
          <Dafaulttextarea />
        </div>
        <CodeDialog>{DafaulttextareaCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default DefaultTextarea;
