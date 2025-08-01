import ProductDetail from "../../../components/apps/ecommerce/productDetail";
import ProductCarousel from "../../../components/apps/ecommerce/productDetail/ProductCarousel";
import ProductDesc from "../../../components/apps/ecommerce/productDetail/ProductDesc";
import ProductRelated from "../../../components/apps/ecommerce/productDetail/ProductRelated";
import CardBox from "../../../components/shared/CardBox";
import { ProductProvider } from "../../../context/Ecommercecontext";
import BreadcrumbComp from "../../../layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '/apps/ecommerce/shop',
    text: 'Shop',
  },
  {
    href: '',
    text: 'Shop Detail',
  },
]

const EcommerceDetail = () => {
  return (
    <>
      <ProductProvider>
        <BreadcrumbComp title="Shop Detail" links={BCrumb} />
        {/* Slider and Details of Products */}
        <CardBox>
          <div className="flex lg:flex-nowrap flex-wrap justify-between gap-[30px]">
            <div className="lg:w-5/12 w-full"><ProductCarousel /></div>
            <div className="lg:w-6/12 w-full"><ProductDetail /></div>
          </div>
        </CardBox>
        {/* Description Tabs Products */}
        <CardBox className="mt-[30px] pt-2">
          <ProductDesc />
        </CardBox>
        {/* Related Products */}
        <ProductRelated />
      </ProductProvider>
    </>
  );
};

export default EcommerceDetail;
