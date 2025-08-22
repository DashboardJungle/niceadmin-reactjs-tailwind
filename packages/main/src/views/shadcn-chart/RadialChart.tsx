import Intro from 'src/components/component-page/shared/Intro';
import ChartRadialSimple from 'src/components/shadcn-charts/radial/Default';
import ChartRadialGrid from 'src/components/shadcn-charts/radial/Grid';
import ChartRadialLabel from 'src/components/shadcn-charts/radial/Label';
import ChartRadialShape from 'src/components/shadcn-charts/radial/Shape';
import ChartRadialStacked from 'src/components/shadcn-charts/radial/Stacked';
import ChartRadialText from 'src/components/shadcn-charts/radial/Text';

const intro = {
  heading: 'Radial chart',
  desc: 'A Radial Chart is a circular data visualization that represents values as segments or arcs around a central point. It’s useful for comparing proportions, showing progress, or highlighting patterns in cyclical or categorical data.',
};

const RadialChart = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Default */}
        <div className="col-span-12">
          <ChartRadialSimple />
        </div>
        {/* Label */}
        <div className="col-span-12">
          <ChartRadialLabel />
        </div>
        {/* Grid */}
        <div className="col-span-12">
          <ChartRadialGrid />
        </div>
        {/* Text */}
        <div className="col-span-12">
          <ChartRadialText />
        </div>
        {/* Shape */}
        <div className="col-span-12">
          <ChartRadialShape />
        </div>
        {/* Stacked */}
        <div className="col-span-12">
          <ChartRadialStacked />
        </div>
      </div>
    </>
  );
};

export default RadialChart;
