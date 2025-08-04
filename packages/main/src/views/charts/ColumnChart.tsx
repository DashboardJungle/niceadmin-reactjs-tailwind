import ApexColumnChart from "src/components/charts/ApexColumnChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Chart Apex Column',
  },
]

const ColumnChart = () => {

  return (
    <>
      <BreadcrumbComp title="Chart Apex Column" links={BCrumb} />
      <ApexColumnChart />
    </>
  );
};

export default ColumnChart;
