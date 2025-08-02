import RollBaseIndex from "src/components/theme-pages/casl";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'CASL',
  },
]

const RollBase = () => {

  return (
    <>
      <BreadcrumbComp title="Rollbase Access" links={BCrumb} />
      <RollBaseIndex />
    </>
  );
};

export default RollBase;
