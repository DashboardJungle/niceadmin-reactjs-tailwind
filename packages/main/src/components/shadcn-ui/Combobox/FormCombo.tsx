import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Formcombo from './code/FormComboCode';
import FormcomboCode from './code/FormComboCode.tsx?raw';

const FormCombo = () => {
  return (
    <CardBox className="p-0">
      <div>
        <div className="p-6">
          <h4 className="text-lg font-semibold mb-4">Form Combobox</h4>
          <Formcombo />
        </div>
        <CodeDialog>{FormcomboCode}</CodeDialog>
      </div>
    </CardBox>
  );
};

export default FormCombo;
