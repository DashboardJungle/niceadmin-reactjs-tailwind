import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Passwordpopover from './Code/PasswordPopoverCode';
import PasswordpopoverCode from './Code/PasswordPopoverCode.tsx?raw';

const PasswordPopover = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Password Strength</h4>
            <Passwordpopover />
          </div>
          <CodeDialog>{PasswordpopoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PasswordPopover;
