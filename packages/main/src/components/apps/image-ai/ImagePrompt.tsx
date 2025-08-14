import React, { useContext, useRef, useState } from 'react';
import CardBox from '../../shared/CardBox';
import {
  FileInput,
  Dropdown,
  DropdownItem,
  Textarea,
  Tooltip,
  Button,
  Toast,
  ToastToggle,
  Spinner,
} from 'flowbite-react';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  AspectRatio,
  styleOptions,
  toneOptions,
  lightingOptions,
  cameraOptions,
} from 'src/api/image-ai/dropdowndata';
import { ImageContext } from 'src/context/ImageAiContext';

function ImagePrompt() {
  const { prompt, setPrompt, generateImages, setIsUsingMock, isGenerating, setIsGenerating } =
    useContext(ImageContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selected, setSelected] = useState(AspectRatio[0]);
  const [selectedStyle, setSelectedStyle] = useState(styleOptions[0]);
  const [showToast, setShowToast] = useState(false);

  const [selectedTone, setSelectedTone] = useState(toneOptions[0]);
  const [selectedLighting, setSelectedLighting] = useState(lightingOptions[0]);
  const [selectedCamera, setSelectedCamera] = useState(cameraOptions[0]);

  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSelectAspect = (option: typeof selected) => {
    setSelected(option);
  };

  const handleSelectStyle = (option: typeof selected) => {
    setSelectedStyle(option);
  };

  const handleSelectTone = (option: typeof selected) => {
    setSelectedTone(option);
  };

  const handleSelectLighting = (option: typeof selected) => {
    setSelectedLighting(option);
  };

  const handleSelectCamera = (option: typeof selected) => {
    setSelectedCamera(option);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImageUrl(imageUrl); // set preview
      console.log('Selected file:', file);
    }
  };

  // const generateImage = async () => {
  //   if (!prompt.trim()) {
  //     setShowToast(true);
  //     return;
  //   }

  //   setIsGenerating(true); // Start loading spinner

  //   try {
  //     await generateImages(prompt);
  //   } catch (err) {
  //     console.error("Generation error:", err);
  //   } finally {
  //     setIsGenerating(false);
  //   }
  // };

  const generateImage = async () => {
    if (!prompt.trim()) {
      setShowToast(true);
      return;
    }

    setIsGenerating(true); // Start loading
    setIsUsingMock(true);

    setTimeout(async () => {
      try {
        await generateImages(prompt);
      } catch (err) {
        console.error('Generation error:', err);
      } finally {
        setIsGenerating(false); // Done loading
      }
    }, 3000);
  };

  const handleClear = () => {
    setPrompt('');
    setSelected(AspectRatio[0]);
    setSelectedStyle(styleOptions[0]);
    setSelectedTone(toneOptions[0]);
    setSelectedLighting(lightingOptions[0]);
    setSelectedCamera(cameraOptions[0]);
    setSelectedImageUrl(null); // clear preview

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-2xl font-bold mb-1">AI image generator</h2>
        <p className="text-sm font-medium ">
          Create an image with Generative AI by describing what you'd like to see. Please note, all
          images are shared publicly by default.
        </p>
      </div>
      <div>
        <CardBox className="p-4">
          <div>
            {selectedImageUrl && (
              <div className="mb-4">
                <img
                  src={selectedImageUrl}
                  alt="Selected preview"
                  width={200}
                  height={200}
                  className="rounded-lg object-contain max-h-50"
                />
              </div>
            )}
            <p className="text-base font-semibold text-link dark:text-darklink">Prompt</p>
            <Textarea
              className="bg-transparent dark:bg-transparent p-1 border-none resize-none"
              placeholder="Decribe the image you want to generate"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="inline-flex flex-wrap gap-2">
              <Tooltip content="Add Image" placement="top">
                <div
                  onClick={handleClick}
                  className="w-10 h-10 border border-border dark:border-darkborder rounded-md flex items-center justify-center cursor-pointer hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
                >
                  <Icon icon="solar:gallery-outline" width={20} height={20} />
                  <FileInput
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </Tooltip>
              {/* aspect */}
              <div className="border border-border dark:border-darkborder px-3 py-1 h-10 rounded-md hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary">
                <Dropdown
                  arrowIcon={false}
                  renderTrigger={() => (
                    <div className="flex gap-2 items-center cursor-pointer h-full">
                      <Icon icon={selected.icon} height={18} />
                      <span>{selected.label}</span>
                    </div>
                  )}
                  dismissOnClick={true}
                >
                  {AspectRatio.map((option, i) => (
                    <DropdownItem
                      key={i}
                      onClick={() => handleSelectAspect(option)}
                      className="flex gap-3 items-center"
                    >
                      <Icon icon={option.icon} width={18} height={18} />
                      <span>{option.label}</span>
                    </DropdownItem>
                  ))}
                </Dropdown>
              </div>
              {/* style */}
              <div className="border border-border dark:border-darkborder px-3 py-1 h-10 rounded-md hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary">
                <Dropdown
                  arrowIcon={false}
                  renderTrigger={() => (
                    <div className="flex gap-2 items-center cursor-pointer h-full">
                      <Icon icon={selectedStyle.icon} width={18} height={18} />
                      <span>{selectedStyle.label}</span>
                    </div>
                  )}
                  dismissOnClick={true}
                >
                  {styleOptions.map((option, i) => (
                    <DropdownItem
                      key={i}
                      onClick={() => handleSelectStyle(option)}
                      className="flex gap-3 items-center  "
                    >
                      <Icon
                        icon={option.icon}
                        width={20}
                        height={20}
                        className="text-primary bg-lightprimary  dark:bg-lightprimary rounded-full p-1"
                      />

                      <span>{option.label}</span>
                    </DropdownItem>
                  ))}
                </Dropdown>
              </div>
              {/* tone */}
              <div className="border border-border dark:border-darkborder px-3 py-1 h-10 rounded-md hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary">
                <Dropdown
                  arrowIcon={false}
                  renderTrigger={() => (
                    <div className="flex gap-2 items-center cursor-pointer h-full">
                      <Icon icon={selectedTone.icon} width={18} height={18} />

                      <span>{selectedTone.label}</span>
                    </div>
                  )}
                  dismissOnClick={true}
                >
                  {toneOptions.map((option, i) => (
                    <DropdownItem
                      key={i}
                      onClick={() => handleSelectTone(option)}
                      className="flex gap-3 items-center"
                    >
                      <Icon
                        icon={option.icon}
                        width={20}
                        height={20}
                        className="text-primary bg-lightprimary  dark:bg-lightprimary rounded-full p-1"
                      />

                      <span>{option.label}</span>
                    </DropdownItem>
                  ))}
                </Dropdown>
              </div>
              {/* lighting */}
              <div className="border border-border dark:border-darkborder px-3 py-1 h-10 rounded-md hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary">
                <Dropdown
                  arrowIcon={false}
                  renderTrigger={() => (
                    <div className="flex gap-2 items-center cursor-pointer h-full">
                      <Icon icon={selectedLighting.icon} width={18} height={18} />

                      <span>{selectedLighting.label}</span>
                    </div>
                  )}
                  dismissOnClick={true}
                >
                  {lightingOptions.map((option, i) => (
                    <DropdownItem
                      key={i}
                      onClick={() => handleSelectLighting(option)}
                      className="flex gap-3 items-center"
                    >
                      <Icon
                        icon={option.icon}
                        width={20}
                        height={20}
                        className="text-primary bg-lightprimary  dark:bg-lightprimary rounded-full p-1"
                      />

                      <span>{option.label}</span>
                    </DropdownItem>
                  ))}
                </Dropdown>
              </div>
              {/* camera */}
              <div className="border border-border dark:border-darkborder px-3 py-1 h-10 rounded-md hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary">
                <Dropdown
                  arrowIcon={false}
                  renderTrigger={() => (
                    <div className="flex gap-2 items-center cursor-pointer h-full">
                      <Icon icon={selectedCamera.icon} width={18} height={18} />

                      <span>{selectedCamera.label}</span>
                    </div>
                  )}
                  dismissOnClick={true}
                >
                  {cameraOptions.map((option, i) => (
                    <DropdownItem
                      key={i}
                      onClick={() => handleSelectCamera(option)}
                      className="flex gap-3 items-center"
                    >
                      <Icon
                        icon={option.icon}
                        width={20}
                        height={20}
                        className="text-primary bg-lightprimary  dark:bg-lightprimary rounded-full p-1"
                      />

                      <span>{option.label}</span>
                    </DropdownItem>
                  ))}
                </Dropdown>
              </div>
            </div>
            {/* Button */}
            <div className="flex items-center gap-2">
              <Button
                pill
                onClick={generateImage}
                disabled={isGenerating}
                className="flex items-center gap-2"
              >
                {isGenerating && <Spinner size="sm" light />}
                <span className={isGenerating ? 'opacity-60' : ''}>Generate</span>
              </Button>
              <Button pill color={'outlineprimary'} onClick={handleClear}>
                Clear
              </Button>
            </div>
          </div>
        </CardBox>
      </div>

      {showToast && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50">
          <Toast className="bg-neutral-700 dark:bg-white">
            <p className="text-sm font-normal text-white dark:text-link">
              {' '}
              Please enter a prompt before generating.
            </p>
            <ToastToggle />
          </Toast>
        </div>
      )}
      <div></div>
    </div>
  );
}

export default ImagePrompt;
