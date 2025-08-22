import Intro from 'src/components/component-page/shared/Intro';
import BasicProgressbar from 'src/components/shadcn-ui/Progressbar/BasicProgressbar';

const intro = {
  heading: 'Progressbar',
  desc: 'A Progress Bar is a UI component used to visually indicate the completion status of a task or process.',
};

const ShadcnProgress = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className="col-span-12">
          <BasicProgressbar />
        </div>
      </div>
    </>
  );
};

export default ShadcnProgress;
