import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import TextareaWithtext from './code/TextareaWithTextCode';
import TextareaWithtextCode from './code/TextareaWithTextCode.tsx?raw';

const TextareaWithText = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Textarea with Label</h4>
          <TextareaWithtext />
        </div>
        <CodeDialog>{TextareaWithtextCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default TextareaWithText;
