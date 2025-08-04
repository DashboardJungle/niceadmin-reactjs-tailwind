import Intro from 'src/components/component-page/shared/Intro'
import ChartBarActive from 'src/components/shadcn-charts/bar/Active'
import ChartBarLabelCustom from 'src/components/shadcn-charts/bar/CustomLabel'
import ChartBarDefault from 'src/components/shadcn-charts/bar/Default'
import ChartBarHorizontal from 'src/components/shadcn-charts/bar/Horizontal'
import ChartBarInteractive from 'src/components/shadcn-charts/bar/Interactive'
import ChartBarLabel from 'src/components/shadcn-charts/bar/Label'
import ChartBarMixed from 'src/components/shadcn-charts/bar/Mixed'
import ChartBarMultiple from 'src/components/shadcn-charts/bar/Multiple'
import ChartBarNegative from 'src/components/shadcn-charts/bar/Negative'
import ChartBarStacked from 'src/components/shadcn-charts/bar/StackedLegend'


const intro = {
  heading: 'Bar chart',
  desc: 'A Bar Chart is a data visualization component used to represent categorical data with rectangular bars, emphasizing comparisons between discrete groups or values by the length or height of the bars.',
}

const page = () => {
  return (
    <>
      <div className='grid grid-cols-12 gap-5 sm:gap-30'>
        {/* intro */}
        <div className='col-span-12'>
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className='col-span-12'>
          <ChartBarDefault />
        </div>
        {/* Horizontal */}
        <div className='col-span-12'>
          <ChartBarHorizontal />
        </div>
        {/* Multiple */}
        <div className='col-span-12'>
          <ChartBarMultiple />
        </div>
        {/* Stacked */}
        <div className='col-span-12'>
          <ChartBarStacked />
        </div>
        {/* Label */}
        <div className='col-span-12'>
          <ChartBarLabel />
        </div>
        {/* Custom Label */}
        <div className='col-span-12'>
          <ChartBarLabelCustom />
        </div>
        {/* Mixed */}
        <div className='col-span-12'>
          <ChartBarMixed />
        </div>
        {/* Active */}
        <div className='col-span-12'>
          <ChartBarActive />
        </div>
        {/* Negative */}
        <div className='col-span-12'>
          <ChartBarNegative />
        </div>
        {/* Interactive */}
        <div className='col-span-12'>
          <ChartBarInteractive />
        </div>
      </div>
    </>
  )
}

export default page
