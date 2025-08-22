import CardBox from '../../shared/CardBox';
import Paragraphtypo from './Code/ParagraphTypoCode';
import ParagraphtypoCode from './Code/ParagraphTypoCode.tsx?raw';
import CodeDialog from '../../shared/CodeDialog';

const ParagraphTypo = () => {
  return (
    <div>
      <CardBox className="p-0">
        <div>
          <div className="p-6">
            <h4 className="text-lg font-semibold mb-2">Paragraph context</h4>
            <Paragraphtypo />
          </div>
          <CodeDialog>{ParagraphtypoCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  );
};

export default ParagraphTypo;
