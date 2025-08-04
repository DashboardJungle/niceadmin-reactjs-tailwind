import Intro from 'src/components/component-page/shared/Intro'
import ChartPieLabelCustom from 'src/components/shadcn-charts/pie/CustomLabel'
import ChartPieSimple from 'src/components/shadcn-charts/pie/Default'
import ChartPieDonut from 'src/components/shadcn-charts/pie/Donut'
import ChartPieDonutActive from 'src/components/shadcn-charts/pie/DonutActive'
import ChartPieDonutText from 'src/components/shadcn-charts/pie/DonutWithText'
import ChartPieInteractive from 'src/components/shadcn-charts/pie/Interactive'
import ChartPieLabel from 'src/components/shadcn-charts/pie/Label'
import ChartPieLabelList from 'src/components/shadcn-charts/pie/LabelList'
import ChartPieLegend from 'src/components/shadcn-charts/pie/Legend'
import ChartPieSeparatorNone from 'src/components/shadcn-charts/pie/SeparatorNone'
import ChartPieStacked from 'src/components/shadcn-charts/pie/Stacked'

const intro = {
  heading: 'Pie chart',
  desc: 'A Pie Chart is a data visualization component used to represent categorical data as proportional slices of a circle, emphasizing the relative contribution of each category to the whole by illustrating parts-to-whole relationships in a compact and intuitive format.',
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
          <ChartPieSimple />
        </div>
        {/* Separator None */}
        <div className='col-span-12'>
          <ChartPieSeparatorNone />
        </div>
        {/* Label */}
        <div className='col-span-12'>
          <ChartPieLabel />
        </div>
        {/* Custom Label */}
        <div className='col-span-12'>
          <ChartPieLabelCustom />
        </div>
        {/* Label List */}
        <div className='col-span-12'>
          <ChartPieLabelList />
        </div>
        {/* Legend */}
        <div className='col-span-12'>
          <ChartPieLegend />
        </div>
        {/* Donut */}
        <div className='col-span-12'>
          <ChartPieDonut />
        </div>
        {/* Donut Active */}
        <div className='col-span-12'>
          <ChartPieDonutActive />
        </div>
        {/* Donut With Text */}
        <div className='col-span-12'>
          <ChartPieDonutText />
        </div>
        {/* Stacked */}
        <div className='col-span-12'>
          <ChartPieStacked />
        </div>
        {/* Interactive */}
        <div className='col-span-12'>
          <ChartPieInteractive />
        </div>
      </div>
    </>
  )
}

export default page
