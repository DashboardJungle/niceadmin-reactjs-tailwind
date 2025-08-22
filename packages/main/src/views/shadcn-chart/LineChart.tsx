import Intro from 'src/components/component-page/shared/Intro';
import ChartLineDotsCustom from 'src/components/shadcn-charts/line/CustomDots';
import ChartLineLabelCustom from 'src/components/shadcn-charts/line/CustomLabel';
import ChartLineDefault from 'src/components/shadcn-charts/line/Default';
import ChartLineDots from 'src/components/shadcn-charts/line/Dots';
import ChartLineDotsColors from 'src/components/shadcn-charts/line/DotsColors';
import ChartLineInteractive from 'src/components/shadcn-charts/line/Interactive';
import ChartLineLabel from 'src/components/shadcn-charts/line/Label';
import ChartLineLinear from 'src/components/shadcn-charts/line/Linear';
import ChartLineMultiple from 'src/components/shadcn-charts/line/Multiple';
import ChartLineStep from 'src/components/shadcn-charts/line/Step';

const intro = {
  heading: 'Line chart',
  desc: 'A Line Chart is a data visualization component used to represent continuous data points connected by straight lines, emphasizing trends or changes over time by illustrating the relationship between values across a sequential axis.',
};

const LineChart = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className="col-span-12">
          <ChartLineDefault />
        </div>
        {/* Linear */}
        <div className="col-span-12">
          <ChartLineLinear />
        </div>
        {/* Step */}
        <div className="col-span-12">
          <ChartLineStep />
        </div>
        {/* Multiple */}
        <div className="col-span-12">
          <ChartLineMultiple />
        </div>
        {/* Dots */}
        <div className="col-span-12">
          <ChartLineDots />
        </div>
        {/* Custom Dots */}
        <div className="col-span-12">
          <ChartLineDotsCustom />
        </div>
        {/* Dots Colors */}
        <div className="col-span-12">
          <ChartLineDotsColors />
        </div>
        {/* Label */}
        <div className="col-span-12">
          <ChartLineLabel />
        </div>
        {/* Custom Label */}
        <div className="col-span-12">
          <ChartLineLabelCustom />
        </div>
        {/* Interactive */}
        <div className="col-span-12">
          <ChartLineInteractive />
        </div>
      </div>
    </>
  );
};

export default LineChart;
