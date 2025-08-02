import CustomerSegmentation from 'src/components/dashboards/eCommerce/CustomerSegmentation'
import EcommerceActionCards from 'src/components/dashboards/eCommerce/EcommerceActionCards'
import LatestProducts from 'src/components/dashboards/eCommerce/LatestProducts'
import MonthlySales from 'src/components/dashboards/eCommerce/MonthlySales'
import OrderOverview from 'src/components/dashboards/eCommerce/OrderOverview'
import ProductCarousel from 'src/components/dashboards/eCommerce/ProductCarousel'
import RecentSales from 'src/components/dashboards/eCommerce/RecentSales'
import RevenueGrowth from 'src/components/dashboards/eCommerce/RevenueGrowth'
import TotalAssets from 'src/components/dashboards/eCommerce/TotalAssets'
import UserActivity from 'src/components/dashboards/eCommerce/UserActivity'
import WrappixelStore from 'src/components/dashboards/eCommerce/WrappixelStore'



const Ecommerce = () => {
  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='lg:col-span-5 col-span-12'>
        <WrappixelStore />
      </div>
      <div className='lg:col-span-4 col-span-12'>
        <MonthlySales />
      </div>
      <div className='lg:col-span-3 col-span-12'>
        <RevenueGrowth />
      </div>
      <div className='col-span-12'>
        <EcommerceActionCards />
      </div>
      <div className='lg:col-span-3 col-span-12'>
        <CustomerSegmentation />
      </div>
      <div className='lg:col-span-6 col-span-12'>
        <OrderOverview />
      </div>
      <div className='lg:col-span-3 col-span-12'>
        <UserActivity />
      </div>
      <div className='col-span-12'>
        <RecentSales />
      </div>
      <div className='lg:col-span-4 col-span-12 flex'>
        <LatestProducts />
      </div>
      <div className='lg:col-span-5 col-span-12 flex'>
        <TotalAssets />
      </div>
      <div className='lg:col-span-3 col-span-12 flex'>
        <ProductCarousel />
      </div>
    </div>
  )
}

export default Ecommerce
