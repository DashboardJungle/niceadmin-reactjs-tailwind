import Card from 'src/components/uiblocks-page/home/Card';
import Chart from 'src/components/uiblocks-page/home/Chart';
import Banner from 'src/components/uiblocks-page/home/Banner';

export default function UIBlocks() {
  return (
    <>
      <div className="scroll-mt-24" id="uiBlockCard">
        <Card />
      </div>
      <div className="scroll-mt-24" id="uiBlockChart">
        <Chart />
      </div>
      <div className="scroll-mt-24" id="uiBlockBanner">
        <Banner />
      </div>
    </>
  );
}
