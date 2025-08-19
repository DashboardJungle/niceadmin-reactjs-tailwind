import CardBox from '../../shared/CardBox';
import InputColor from './Codes/InputColorsCode';
import InputColorCode from './Codes/InputColorsCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const InputColors = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-2">Input Element Colors</h4>
          <InputColor />
        </div>
        <CodeDialog>{InputColorCode}</CodeDialog>
      </CardBox>
    </div>
  );
};

export default InputColors;
