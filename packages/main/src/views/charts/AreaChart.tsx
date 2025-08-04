import ApexAreaChart from "src/components/charts/ApexAreaChart";
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
const AreaChart = () => {

  return (
    <>
      <BreadcrumbComp title="Chart Apex Area" links={BCrumb} />
      <ApexAreaChart />
    </>
  );
};

export default AreaChart;
