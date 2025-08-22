import CardBox from '../../shared/CardBox';
import CodeDialog from '../../shared/CodeDialog';
import Placementpopover from './Code/PlacementPopoverCode';
import PlacementpopoverCode from './Code/PlacementPopoverCode.tsx?raw';

const PlacementPopover = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-4">Placement</h4>
            <Placementpopover />
          </div>
          <CodeDialog>{PlacementpopoverCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default PlacementPopover;
