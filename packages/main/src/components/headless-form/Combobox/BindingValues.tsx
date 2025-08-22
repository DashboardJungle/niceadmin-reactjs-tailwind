import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import BindingValue from './Codes/BindingValuesCode';
import BindingValueCode from './Codes/BindingValuesCode.tsx?raw';

const BindingValues = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Binding Objects as Values</h4>
            <BindingValue />
          </div>
          <CodeDialog>{BindingValueCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default BindingValues;
