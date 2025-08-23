import { Link } from 'react-router';
import UiBlockCard from 'src/components/shared/UiBlockCard';
import chartUiBlock from '../../data/uiChart';

const Chart = () => {
  return (
    <>
      <section className="py-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6"> Chart UI Blocks 📈</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chartUiBlock.map((item, i) => (
              <Link to={item.href} key={i}>
                <UiBlockCard img={item.img} name={item.name} scale={item.scale} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Chart;
