import ApexCandleStick from "src/components/charts/ApexCandleSticks";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Chart Apex Area',
  },
]

const CandleStick = () => {
  return (
    <>
      <BreadcrumbComp title="Chart Apex Candlestick" links={BCrumb} />
      <ApexCandleStick />
    </>
  );
};

export default CandleStick;
