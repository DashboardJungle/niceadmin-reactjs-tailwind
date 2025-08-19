import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import InputColor from './code/InputColorsCode';
import InputColorCode from './code/InputColorsCode.tsx?raw';

const InputColors = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold">Input Colors</h4>
            <InputColor />
          </div>
          <CodeDialog>{InputColorCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default InputColors;
