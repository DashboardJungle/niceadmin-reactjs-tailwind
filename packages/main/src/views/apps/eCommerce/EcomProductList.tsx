// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ProductProvider } from '../../../context/Ecommercecontext';
import BreadcrumbComp from '../../../layouts/full/shared/breadcrumb/BreadcrumbComp';
import ProductTableList from '../../../components/apps/ecommerce/productTableList/ProductTableList';


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
    text: "Product list",
  },
];

const EcomProductList = () => {
  return (
    <ProductProvider>
      <BreadcrumbComp title="Product list" links={BCrumb} />
      <ProductTableList />
    </ProductProvider>
  );
};

export default EcomProductList;
