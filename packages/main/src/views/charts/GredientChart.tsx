import ApexGradientChart from "src/components/charts/ApexGradientChart";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Chart Apex Gradient',
  },
]

const GradientChart = () => {
  return (
    <>
      <BreadcrumbComp title="Chart Apex Gradient" links={BCrumb} />
      <ApexGradientChart />
    </>
  );
};

export default GradientChart;
