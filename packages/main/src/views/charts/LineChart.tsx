import ApexLineChart from "src/components/charts/ApexLineChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Chart Apex Line',
  },
]

const LineChart = () => {
  return (
    <>
      <BreadcrumbComp title="Chart Apex Line" links={BCrumb} />
      <ApexLineChart />
    </>
  );
};

export default LineChart;
