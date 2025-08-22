import CardBox from '../../shared/CardBox';
import Buttonloading from './Code/ButtonLoadingCode';
import ButtonloadingCode from './Code/ButtonLoadingCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const ButtonLoading = () => {
  return (
    <>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Button with loading state</h4>
            <Buttonloading />
          </div>
          <CodeDialog>{ButtonloadingCode}</CodeDialog>
        </div>
      </CardBox>
    </>
  );
};

export default ButtonLoading;
