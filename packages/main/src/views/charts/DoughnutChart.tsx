import ApexDoughnutChart from "src/components/charts/ApexDoughnutChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";



const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Chart Apex Doughtnut',
  },
]

const DoughnutChart = () => {

  return (
    <>
      <BreadcrumbComp title="Chart Apex Doughtnut" links={BCrumb} />
      <ApexDoughnutChart />
    </>
  );
};

export default DoughnutChart;
