import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import BindingStringAsvalue from './Codes/BindingStringAsValueCode';
import BindingStringAsvalueCode from './Codes/BindingStringAsValueCode.tsx?raw';

const BindingStringAsValue = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Binding Values</h4>
            <BindingStringAsvalue />
          </div>
          <CodeDialog>{BindingStringAsvalueCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default BindingStringAsValue;
