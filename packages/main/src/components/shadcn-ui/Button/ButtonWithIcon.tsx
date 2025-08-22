import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import ButtonWithicon from './code/ButtonWithIconCode';
import ButtonWithiconCode from './code/ButtonWithIconCode.tsx?raw';

const ButtonWithIcon = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4"> Button With Icon</h4>
          <ButtonWithicon />
        </div>
        <CodeDialog>{ButtonWithiconCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default ButtonWithIcon;
