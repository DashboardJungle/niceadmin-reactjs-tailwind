import AdvertisementCost from 'src/components/dashboards/modern/AdvertisementCost'
import OverviewTab from 'src/components/dashboards/modern/OverviewTab'
import RecentOrders from 'src/components/dashboards/modern/RecentOrders'
import TotalAssets from 'src/components/dashboards/modern/TotalAssets'
import TotalOrders from 'src/components/dashboards/modern/TotalOrders'
import TotalProfit from 'src/components/dashboards/modern/TotalProfit'
import AssetsBlock from 'src/components/dashboards/eCommerce/TotalAssets'
import TotalSales from 'src/components/dashboards/modern/TotalSales'
import UpdateBanner from 'src/components/dashboards/modern/UpdateBanner'

const Modern = () => {
  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-12'>
        <OverviewTab />
      </div>
      <div className='col-span-12'>
        <UpdateBanner />
      </div>
      <div className='lg:col-span-7 col-span-12'>
        <TotalSales />
      </div>
      <div className='lg:col-span-5 col-span-12 flex'>
        <TotalAssets />
      </div>
      <div className='lg:col-span-4 col-span-12'>
        <TotalOrders />
      </div>
      <div className='lg:col-span-4 col-span-12'>
        <TotalProfit />
      </div>
      <div className='lg:col-span-4 col-span-12'>
        <AdvertisementCost />
      </div>
      <div className='lg:col-span-7 col-span-12'>
        <RecentOrders />
      </div>
      <div className='lg:col-span-5 col-span-12 flex'>
        <AssetsBlock />
      </div>
    </div>
  )
}

export default Modern
