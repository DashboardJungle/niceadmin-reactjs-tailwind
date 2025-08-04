
import CurrentVisits from "src/components/dashboards/analytics/CurrentVisits";
import WebsiteVisits from "src/components/dashboards/analytics/WebsiteVisits";
import CustomerSegmentation from "src/components/dashboards/eCommerce/CustomerSegmentation";
import MonthlySales from "src/components/dashboards/eCommerce/MonthlySales";
import UserActivity from "src/components/dashboards/eCommerce/UserActivity";
import WrappixelStore from "src/components/dashboards/eCommerce/WrappixelStore";
import AdvertisementCost from "src/components/dashboards/modern/AdvertisementCost";
import TotalOrders from "src/components/dashboards/modern/TotalOrders";
import TotalProfit from "src/components/dashboards/modern/TotalProfit";
import TotalSales from "src/components/dashboards/modern/TotalSales";
import CurrentValue from "src/components/widgets/charts/CurrentValue";
import Customers from "src/components/widgets/charts/Customers";
import EarnedChart from "src/components/widgets/charts/EarnedChart";
import FollowersChart from "src/components/widgets/charts/FollowersChart";
import MonthlyEarning from "src/components/widgets/charts/MonthlyEarcning";
import MostVisited from "src/components/widgets/charts/MostVisited";
import PageImpression from "src/components/widgets/charts/PageImpression";
import Projects from "src/components/widgets/charts/Projects";
import RevenueUpdates from "src/components/widgets/charts/RevenueUpdates";
import SalesOverview from "src/components/widgets/charts/SalesOverview";
import TotalEarningChart from "src/components/widgets/charts/TotalEarnigs";
import ViewsChart from "src/components/widgets/charts/ViewsChart";
import YarlyBreakup from "src/components/widgets/charts/YarlyBreakup";
import YearlySales from "src/components/widgets/charts/YearlySales";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";


const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Charts',
  },
]

const WidgetCharts = () => {
  return (
    <>
      <BreadcrumbComp title="Charts" links={BCrumb} />
      <div className='grid grid-cols-12 gap-30'>
        <div className='lg:col-span-3 md:col-span-6 col-span-12'>
          <FollowersChart />
        </div>
        <div className='lg:col-span-3 md:col-span-6 col-span-12'>
          <ViewsChart />
        </div>
        <div className='lg:col-span-3 md:col-span-6 col-span-12'>
          <EarnedChart />
        </div>
        <div className='lg:col-span-3 md:col-span-6 col-span-12'>
          <TotalEarningChart />
        </div>
        <div className='col-span-12'>
          <CurrentValue />
        </div>
        <div className='lg:col-span-4 col-span-12'>
          <YarlyBreakup />
          <MonthlyEarning />
          <MostVisited />
        </div>
        <div className='lg:col-span-4 col-span-12'>
          <YearlySales />
          <PageImpression />
          <div className='grid grid-cols-12 gap-30 mt-30'>
            <div className='sm:col-span-6 col-span-12'>
              <Customers />
            </div>
            <div className='sm:col-span-6 col-span-12'>
              <Projects />
            </div>
          </div>
        </div>
        <div className='lg:col-span-4 col-span-12'>
          <RevenueUpdates />
          <SalesOverview />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <CurrentVisits />
        </div>
        <div className='lg:col-span-6 col-span-12'>
          <CustomerSegmentation />
        </div>
        <div className='lg:col-span-8 col-span-12'>
          <WebsiteVisits />
        </div>
        <div className='lg:col-span-4 md:col-span-6 col-span-12 flex flex-col gap-30'>
          <WrappixelStore />
          <MonthlySales />
        </div>
        <div className='lg:col-span-4 md:col-span-6 col-span-12'>
          <UserActivity />
        </div>
        <div className='lg:col-span-8 col-span-12'>
          <TotalSales />
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
      </div>
    </>
  );
};

export default WidgetCharts;
