import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import ControllTabselect from './Code/ControllTabSelectCode';
import ControllTabselectCode from './Code/ControllTabSelectCode.tsx?raw';

const ControllTabSelect = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Controlling Selected Tab</h4>
            <ControllTabselect />
          </div>
          <CodeDialog>{ControllTabselectCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ControllTabSelect;
