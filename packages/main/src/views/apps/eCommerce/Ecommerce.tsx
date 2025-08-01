// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import EcommerceShop from 'src/components/apps/ecommerce/productGrid';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';





const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/apps/ecommerce/shop',
    text: 'Ecommerce',
  },
  {
    href: '',
    text: 'Shop',
  },
]


const Ecommerce = () => {


  return (
    <>
      <BreadcrumbComp title="Shop App" links={BCrumb} />
      <EcommerceShop />
    </>

  );
};

export default Ecommerce;
