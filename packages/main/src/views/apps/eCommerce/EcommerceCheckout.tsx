import ProductCheckout from "../../../components/apps/ecommerce/checkout/ProductCheckout";
import CardBox from "../../../components/shared/CardBox";
import { ProductProvider } from "../../../context/Ecommercecontext";
import BreadcrumbComp from "../../../layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    href: "/",
    text: "Dashboard",
  },
  {
    href: '/apps/ecommerce/shop',
    text: 'Ecommerce',
  },
  {
    href: '',
    text: "Checkout",
  },
];

const Checkout = () => {
  return (
    <>
      <ProductProvider>
        <BreadcrumbComp title="Checkout" links={BCrumb} />
        <CardBox>
          <ProductCheckout />
        </CardBox>
      </ProductProvider>
    </>
  );
};

export default Checkout;
