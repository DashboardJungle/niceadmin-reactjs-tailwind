'use client';
import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Formwithtextarea from './code/FormwithTextareaCode';
import FormwithtextareaCode from './code/FormwithTextareaCode.tsx?raw';

const FormwithTextarea = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Form Textarea</h4>
          <Formwithtextarea />
        </div>
        <CodeDialog>{FormwithtextareaCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default FormwithTextarea;
