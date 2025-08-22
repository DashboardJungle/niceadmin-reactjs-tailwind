import CardBox from '../../shared/CardBox';
import CodeDialog from 'src/components/shared/CodeDialog';
import ButtonWithicon from './Code/ButtonWithIconCode';
import ButtonWithiconCode from './Code/ButtonWithIconCode.tsx?raw';

const ButtonWithIcon = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Button with icon</h4>
            <ButtonWithicon />
          </div>
          <CodeDialog>{ButtonWithiconCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default ButtonWithIcon;
