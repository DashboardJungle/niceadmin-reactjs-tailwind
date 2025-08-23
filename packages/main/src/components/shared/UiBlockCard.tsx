import CardBox from './CardBox';

interface UiBlockProps {
  className?: string;
  img?: string;
  name?: string;
  scale?: string;
}

const UiBlockCard: React.FC<UiBlockProps> = ({ img, name, scale, className }) => {
  return (
    <CardBox
      className={`p-0 overflow-hidden bg-lightprimary/30 dark:bg-darkprimary/60 ${className} hover:scale-102 duration-300`}
    >
      <div className="flex items-center justify-center p-4 h-60 rounded-t-2xl">
        <div className={`border border-ld rounded-2xl overflow-hidden m-4 ${scale}`}>
          <img src={img} alt={name} className="w-auto h-auto" />
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-darkbody border-t border-ld">
        <h3 className="text-lg sm:text-xl">{name}</h3>
      </div>
    </CardBox>
  );
};

export default UiBlockCard;
