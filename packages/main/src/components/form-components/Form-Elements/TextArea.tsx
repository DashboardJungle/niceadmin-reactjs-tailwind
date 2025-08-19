import CardBox from '../../shared/CardBox';
import TextArea from './Codes/TextAreaCode';
import TextAreaCode from './Codes/TextAreaCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const TextAreaEle = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Textarea element</h4>
          <TextArea />
        </div>
        <CodeDialog>{TextAreaCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default TextAreaEle;
