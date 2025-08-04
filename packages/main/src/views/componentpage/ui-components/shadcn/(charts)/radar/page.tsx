import Intro from 'src/components/component-page/shared/Intro'
import ChartRadarLabelCustom from 'src/components/shadcn-charts/radar/CustomLabel'
import ChartRadarDefault from 'src/components/shadcn-charts/radar/Default'
import ChartRadarDots from 'src/components/shadcn-charts/radar/Dots'
import ChartRadarGridCircle from 'src/components/shadcn-charts/radar/GridCircle'
import ChartRadarGridCircleFill from 'src/components/shadcn-charts/radar/GridCircleFilled'
import ChartRadarGridCircleNoLines from 'src/components/shadcn-charts/radar/GridCircleNoLines'
import ChartRadarGridCustom from 'src/components/shadcn-charts/radar/GridCustom'
import ChartRadarGridFill from 'src/components/shadcn-charts/radar/GridFilled'
import ChartRadarGridNone from 'src/components/shadcn-charts/radar/GridNone'
import ChartRadarLegend from 'src/components/shadcn-charts/radar/Legend'
import ChartRadarLinesOnly from 'src/components/shadcn-charts/radar/LinesOnly'
import ChartRadarMultiple from 'src/components/shadcn-charts/radar/Multiple'


const intro = {
  heading: 'Radar chart',
  desc: 'A Radar Chart is a data visualization component used to display multivariate data across several variables, with each shown on a separate axis from a common center. It highlights patterns and comparisons by forming a closed shape, making it easy to spot strengths and differences across categories.',
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
          <ChartRadarDefault />
        </div>
        {/* Dots */}
        <div className='col-span-12'>
          <ChartRadarDots />
        </div>
        {/* Lines Only */}
        <div className='col-span-12'>
          <ChartRadarLinesOnly />
        </div>
        {/* Custom Label */}
        <div className='col-span-12'>
          <ChartRadarLabelCustom />
        </div>
        {/* Grid Custom */}
        <div className='col-span-12'>
          <ChartRadarGridCustom />
        </div>
        {/* Grid None */}
        <div className='col-span-12'>
          <ChartRadarGridNone />
        </div>
        {/* Grid Circle */}
        <div className='col-span-12'>
          <ChartRadarGridCircle />
        </div>
        {/* Grid Circle - No lines */}
        <div className='col-span-12'>
          <ChartRadarGridCircleNoLines />
        </div>
        {/* Grid Circle Filled */}
        <div className='col-span-12'>
          <ChartRadarGridCircleFill />
        </div>
        {/* Grid Filled */}
        <div className='col-span-12'>
          <ChartRadarGridFill />
        </div>
        {/* Multiple */}
        <div className='col-span-12'>
          <ChartRadarMultiple />
        </div>
        {/* Legend */}
        <div className='col-span-12'>
          <ChartRadarLegend />
        </div>
      </div>
    </>
  )
}

export default page
