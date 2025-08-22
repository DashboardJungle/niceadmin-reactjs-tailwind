import CodeDialog from 'src/components/shared/CodeDialog';
import CardBox from '../../shared/CardBox';
import ButtonSizePill from './Code/ButtonSizesPillCode';
import ButtonSizePillCode from './Code/ButtonSizesPillCode.tsx?raw';

const ButtonSizesPill = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Button Pill Sizes</h4>
            <ButtonSizePill />
          </div>
          <CodeDialog>{ButtonSizePillCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default ButtonSizesPill;
