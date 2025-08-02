

import CurrentVisits from 'src/components/dashboards/analytics/CurrentVisits'
import TrafficData from 'src/components/dashboards/analytics/TrafficData'
import KeyInsights from 'src/components/dashboards/analytics/KeyInsights'
import CampaignPerf from 'src/components/dashboards/analytics/CampaignPerf'
import WebsiteVisits from 'src/components/dashboards/analytics/WebsiteVisits'
import ProductActionCards from 'src/components/dashboards/analytics/ProductActionCards'
import ReportBanner from 'src/components/dashboards/analytics/ReportBanner'

const Analytics = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-6'>
        <div className='lg:col-span-8 col-span-12'>
          <ReportBanner />
        </div>
        <div className='lg:col-span-4 col-span-12'>
          <KeyInsights />
        </div>
        <div className='lg:col-span-8 col-span-12'>
          <WebsiteVisits />
        </div>
        <div className='lg:col-span-4 col-span-12'>
          <CurrentVisits />
        </div>
        <div className='col-span-12'>
          <ProductActionCards />
        </div>
        <div className='lg:col-span-4 col-span-12'>
          <CampaignPerf />
        </div>
        <div className='lg:col-span-8 col-span-12'>
          <TrafficData />
        </div>
      </div>
    </>
  )
}

export default Analytics
