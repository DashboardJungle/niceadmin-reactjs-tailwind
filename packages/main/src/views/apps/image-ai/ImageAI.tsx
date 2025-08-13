import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';
import ImageAiApp from 'src/components/apps/image-ai';
import { ImageAiProvider } from 'src/context/ImageAiContext';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Image-AI',
  },
];

function ImageAI() {
  return (
    <>
      <ImageAiProvider>
        <BreadcrumbComp title="Image-AI" links={BCrumb} />
        <ImageAiApp />
      </ImageAiProvider>
    </>
  );
}

export default ImageAI;
