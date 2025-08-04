import ApexRadialChart from "src/components/charts/ApexRadialBarChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Chart Apex Radialbar',
  },
]

const RadialChart = () => {

  return (
    <>
      <BreadcrumbComp title="Chart Apex Radialbar" links={BCrumb} />
      <ApexRadialChart />
    </>
  );
};

export default RadialChart;
