import Intro from 'src/components/component-page/shared/Intro';
import BasicSkeleton from 'src/components/shadcn-ui/Skeleton/BasicSkeleton';
import CardSkeleton from 'src/components/shadcn-ui/Skeleton/CardSkeleton';

const intro = {
  heading: 'Skeleton',
  desc: 'A Skeleton is a UI component that displays a placeholder loading animation to indicate content is being loaded.',
};

const ShadcnSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* intro */}
        <div className="col-span-12">
          <Intro detail={intro} />
        </div>
        {/* Basic */}
        <div className="col-span-12">
          <BasicSkeleton />
        </div>
        <div className="col-span-12">
          <CardSkeleton />
        </div>
      </div>
    </>
  );
};

export default ShadcnSkeleton;
