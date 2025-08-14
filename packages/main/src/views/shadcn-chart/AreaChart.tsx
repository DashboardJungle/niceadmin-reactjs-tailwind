import Intro from 'src/components/component-page/shared/Intro';
import ChartAreaAxes from 'src/components/shadcn-charts/area/Axes';
import ChartAreaDefault from 'src/components/shadcn-charts/area/Default';
import ChartAreaGradient from 'src/components/shadcn-charts/area/Gradient';
import ChartAreaIcons from 'src/components/shadcn-charts/area/Icons';
import ChartAreaInteractive from 'src/components/shadcn-charts/area/Interactive';
import ChartAreaLegend from 'src/components/shadcn-charts/area/Legend';
import ChartAreaLinear from 'src/components/shadcn-charts/area/Linear';
import ChartAreaStacked from 'src/components/shadcn-charts/area/Stacked';
import ChartAreaStackedExpand from 'src/components/shadcn-charts/area/StackedExpanded';
import ChartAreaStep from 'src/components/shadcn-charts/area/Step';

const intro = {
  heading: 'Area chart',
  desc: 'An Area Chart is a data visualization component used to display quantitative data trends over time, emphasizing the magnitude of change with filled areas beneath the lines.',
};

const AreaChart = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 sm:gap-30">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* default */}
        <div className="col-span-12">
          <ChartAreaDefault />
        </div>
        {/* Linear */}
        <div className="col-span-12">
          <ChartAreaLinear />
        </div>
        {/* Step */}
        <div className="col-span-12">
          <ChartAreaStep />
        </div>
        {/* Legend */}
        <div className="col-span-12">
          <ChartAreaLegend />
        </div>
        {/* Stacked */}
        <div className="col-span-12">
          <ChartAreaStacked />
        </div>
        {/* Stacked expanded */}
        <div className="col-span-12">
          <ChartAreaStackedExpand />
        </div>
        {/* Icons */}
        <div className="col-span-12">
          <ChartAreaIcons />
        </div>
        {/* Gradient */}
        <div className="col-span-12">
          <ChartAreaGradient />
        </div>
        {/* Axes */}
        <div className="col-span-12">
          <ChartAreaAxes />
        </div>
        {/* Interactive */}
        <div className="col-span-12">
          <ChartAreaInteractive />
        </div>
      </div>
    </>
  );
};

export default AreaChart;
