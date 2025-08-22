import CardBox from '../../shared/CardBox';
import ButtonSizesquare from './Code/ButtonSizeSquareCode';
import ButtonSizesquareCode from './Code/ButtonSizeSquareCode.tsx?raw';
import CodeDialog from 'src/components/shared/CodeDialog';

const ButtonSizesSquare = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Button Square Sizes</h4>
            <ButtonSizesquare />
          </div>
          <CodeDialog>{ButtonSizesquareCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default ButtonSizesSquare;
