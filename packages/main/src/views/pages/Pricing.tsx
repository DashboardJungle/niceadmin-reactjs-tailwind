import PricingIndex from "src/components/theme-pages/pricing";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Pricing',
  },
]

const Pricing = () => {
  return (
    <>
      <BreadcrumbComp title="Pricing" links={BCrumb} />
      <PricingIndex />
    </>
  );
};

export default Pricing;
