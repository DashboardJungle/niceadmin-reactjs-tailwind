import { useContext } from 'react';
import ImagePrompt from './ImagePrompt';
import GeneratedImageDisplay from './GeneratedImageDisplay';
import DefaultImageDisplay from './DefaultImageDisplay';
import CardBox from '../../shared/CardBox';
import { ImageContext } from 'src/context/ImageAiContext';

function ImageAiApp() {
  const { displayedImages, isGenerating } = useContext(ImageContext);

  const hasGeneratedImages = displayedImages && displayedImages.length > 0;
  return (
    <CardBox>
      <div className="h-full flex flex-auto flex-col gap-5">
        <ImagePrompt />

        {/* {hasGeneratedImages && <GeneratedImageDisplay />} */}
        {(isGenerating || hasGeneratedImages) && <GeneratedImageDisplay />}

        <DefaultImageDisplay />
      </div>
    </CardBox>
  );
}

export default ImageAiApp;
