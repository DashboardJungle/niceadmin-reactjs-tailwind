
import React, { useContext, useEffect } from "react";
import { Button, Drawer, RangeSlider, Tooltip } from "flowbite-react";
import { Icon } from "@iconify/react";

import { useState } from "react";
import { IconCheck, IconSettings } from "@tabler/icons-react";
import SimpleBar from "simplebar-react";
import { CustomizerContext } from "src/context/CustomizerContext";

export const Customizer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  interface SliderProps {
    value: number;
    min: number;
    max: number;
    valueLabelDisplay: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  const addAttributeToBody = (cvalue: any) => {
    document.body.setAttribute("data-color-theme", cvalue);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Slider: React.FC<SliderProps> = ({
    value,
    max,
    onChange,
  }) => (
    <input
      type="range"
      value={value}
      min={10}
      max={max}
      onChange={onChange}
      className="slider w-full"
    />
  );

  const {
    activeDir,
    setActiveDir,
    activeMode,
    setActiveMode,
    isCollapse,
    setIsCollapse,
    activeTheme,
    setActiveTheme,
    activeLayout,
    setActiveLayout,
    isLayout,
    isCardShadow,
    setIsCardShadow,
    setIsLayout,
    isBorderRadius,
    setIsBorderRadius,
  } = useContext(CustomizerContext);


  const themeColors = [
    {
      id: 1,
      bgColor: '#C2FD75',
      disp: 'GREEN_THEME',
    },
    {
      id: 2,
      bgColor: '#FF9F1C',
      disp: 'ORANGE_THEME',
    },
    {
      id: 3,
      bgColor: '#C2B4F8',
      disp: 'VIOLET_THEME',
    },
    {
      id: 4,
      bgColor: '#6EE7FF',
      disp: 'BLUE_THEME',
    },
    {
      id: 5,
      bgColor: '#73FBD3',
      disp: 'TEAL_THEME',
    },
    {
      id: 6,
      bgColor: '#B9CBFF',
      disp: 'LAVENDER_THEME',
    },
  ]

  return (
    <div>
      <div>
        <Button
          color={'primary'}
          size='sm'
          className='h-14 w-14 flex justify-center items-center fixed bottom-6 end-6 z-20 rounded-full hover:bg-primaryemphasis'
          onClick={() => setIsOpen(true)}>
          <IconSettings />
        </Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position={`${activeDir === 'rtl' ? 'left' : 'right'}`}
        className='dark:bg-black max-w-[350px] w-full'>
        <div className='border-ld  border-b'>
          <div className='flex justify-between items-center p-4'>
            <h5 className='text-xl'>Settings</h5>
            <button
              className='p-2 rounded-full hover:bg-lightprimary dark:hover:bg-primary hover:cursor-pointer'
              onClick={handleClose}>
              <Icon icon={'tabler:x'} width={18} height={18} />
            </button>
          </div>
        </div>
        <SimpleBar className='h-n80'>
          <div className='p-4'>
            {/* Theme Option */}
            <h4 className='text-base mb-2'>Theme Option</h4>
            <div className='flex gap-4 mb-7'>
              <Button
                color={'primary'}
                className={`border bg-transparent text-link dark:text-darklink btn-shadow border-ld hover:scale-105 transition-all hover:text-primary rounded-md py-3 px-6 h-14 dark:hover:text-darklink 
                ${activeMode === 'light'
                    ? 'active text-primary dark:text-primary bg-lightprimary hover:bg-lightprimary'
                    : 'hover:bg-transparent dark:hover:bg-transparent'
                  }`}
                onClick={() => {
                  setActiveMode('light')
                }}>
                <span className='flex items-center'>
                  <Icon icon='tabler:sun' className='me-2 text-2xl' />
                  Light
                </span>
              </Button>
              <Button
                color={'primary'}
                className={`border bg-transparent border-ld text-link dark:text-darklink hover:scale-105 transition-all rounded-md py-3 px-6 h-14 ${activeMode === 'dark'
                    ? 'active text-primary dark:text-secondary dark:bg-primary'
                    : 'hover:bg-transparent dark:hover:bg-transparent  hover:text-primary dark:hover:text-darklink'
                  }`}
                onClick={() => {
                  setActiveMode('dark')
                }}>
                <span className='flex items-center'>
                  <Icon icon='tabler:moon' className='me-2 text-2xl' /> Dark
                </span>
              </Button>
            </div>

            {/* Theme direction */}
            <h4 className='text-base mb-2'>Theme Direction</h4>
            <div className='flex gap-4 mb-7'>
              <Button
                color={'primary'}
                className={`border bg-transparent btn-shadow border-ld text-link dark:text-darklink  hover:scale-105 transition-all rounded-md py-3 px-6 h-14  ${activeDir === 'ltr'
                    ? 'text-primary dark:text-secondary bg-lightprimary dark:bg-primary hover:bg-lightprimary dark:hover:bg-primary'
                    : 'bg-transparent hover:bg-transparent hover:text-primary dark:hover:text-darklink'
                  }`}
                onClick={() => {
                  setActiveDir('ltr')
                }}>
                <span className='flex items-center'>
                  <Icon
                    icon='tabler:text-direction-ltr'
                    className='me-2 text-2xl'
                  />{' '}
                  LTR
                </span>
              </Button>
              <Button
                color={'primary'}
                className={`border bg-transparent btn-shadow border-ld text-link dark:text-darklink  hover:scale-105 transition-all rounded-md py-3 px-6 h-14 ${activeDir === 'rtl'
                    ? 'text-primary dark:text-secondary bg-lightprimary dark:bg-primary hover:bg-lightprimary dark:hover:bg-primary'
                    : 'bg-transparent hover:bg-transparent hover:text-primary dark:hover:text-darklink'
                  }`}
                onClick={() => {
                  setActiveDir('rtl')
                }}>
                <span className='flex items-center'>
                  <Icon
                    icon='tabler:text-direction-rtl'
                    className='me-2 text-2xl'
                  />{' '}
                  RTL
                </span>
              </Button>
            </div>

            {/* Theme Colors */}
            <h4 className='text-base mb-2'>Theme Colors</h4>
            <div className='flex flex-row flex-wrap gap-4 mb-7'>
              {themeColors.map((theme, index) => (
                <span
                  key={index}
                  onClick={() => {
                    addAttributeToBody(theme.disp)
                    setActiveTheme(theme.disp)
                  }}
                  className='border bg-transparent hover:bg-transparent dark:hover:bg-transparent text-link border-ld py-5 px-6 rounded-md cursor-pointer '>
                  <Tooltip
                    content={theme.disp}
                    placement='top'
                    animation='duration-500'>
                    <label
                      className=' h-6 w-6 rounded-full cursor-pointer flex items-center justify-center'
                      style={{ backgroundColor: theme.bgColor }}>
                      {activeTheme === theme.disp && (
                        <IconCheck className='text-black' size={18} />
                      )}
                    </label>
                  </Tooltip>
                </span>
              ))}
            </div>

            {/* Theme layout */}
            <h4 className='text-base mb-2'>Layout Type</h4>
            <div className='flex flex-wrap  gap-4 mb-7'>
              <Button
                color={'primary'}
                className={`border bg-transparent btn-shadow border-ld text-link dark:text-darklink hover:scale-105 transition-all rounded-md py-3 px-6 h-14  ${activeLayout === 'vertical'
                    ? 'text-primary dark:text-secondary bg-lightprimary dark:bg-primary hover:bg-lightprimary dark:hover:bg-primary'
                    : 'bg-transparent hover:bg-transparent hover:text-primary dark:hover:text-darklink'
                  }`}
                onClick={() => setActiveLayout('vertical')}>
                <span className='flex items-center'>
                  <Icon
                    icon='tabler:layout-sidebar-right'
                    className='me-2 text-2xl'
                  />
                  Vertical
                </span>
              </Button>
              <Button
                color={'primary'}
                onClick={() => setActiveLayout('horizontal')}
                className={`border bg-transparent border-ld text-link dark:text-darklink hover:scale-105 transition-all rounded-md py-3 px-6 h-14 ${activeLayout === 'horizontal'
                    ? 'text-primary dark:text-secondary bg-lightprimary dark:bg-primary hover:bg-lightprimary dark:hover:bg-primary'
                    : 'bg-transparent hover:bg-transparent hover:text-primary dark:hover:text-darklink'
                  }`}>
                <span className='flex items-center'>
                  <Icon icon='tabler:layout-navbar' className='me-2 text-2xl' />
                  Horizontal
                </span>
              </Button>
            </div>

            {/* Sidebar Type */}
            <h4 className='text-base mb-2'>Container Option</h4>
            <div className='flex flex-wrap  gap-4 mb-7'>
              <Button
                color={'primary'}
                className={`border bg-transparent btn-shadow border-ld text-link dark:text-darklink hover:scale-105 transition-all rounded-md py-3 px-6 h-14 ${isLayout === 'boxed'
                    ? 'text-primary dark:text-secondary bg-lightprimary dark:bg-primary hover:bg-lightprimary dark:hover:bg-primary'
                    : 'bg-transparent hover:bg-transparent hover:text-primary dark:hover:text-darklink'
                  }`}
                onClick={() => setIsLayout('boxed')}>
                <span className='flex items-center'>
                  <Icon
                    icon='tabler:layout-distribute-vertical'
                    className='me-2 text-2xl'
                  />
                  Boxed
                </span>
              </Button>
              <Button
                color={'primary'}
                className={`border bg-transparent border-ld text-link dark:text-darklink hover:scale-105 transition-all rounded-md py-3 px-6 h-14 ${isLayout === 'full'
                    ? 'text-primary dark:text-secondary bg-lightprimary dark:bg-primary hover:bg-lightprimary dark:hover:bg-primary'
                    : 'bg-transparent hover:bg-transparent hover:text-primary dark:hover:text-darklink'
                  }`}
                onClick={() => setIsLayout('full')}>
                <span className='flex items-center'>
                  <Icon
                    icon='tabler:layout-distribute-horizontal'
                    className='me-2 text-2xl'
                  />
                  Full
                </span>
              </Button>
            </div>

            {/* Sidebar Type */}
            <h4 className='text-base mb-2'>Sidebar Type</h4>
            <div className='flex flex-wrap  gap-4 mb-7'>
              <Button
                color={'primary'}
                className={`border bg-transparent btn-shadow border-ld text-link dark:text-darklink hover:scale-105 transition-all rounded-md py-3 px-6 h-14 ${isCollapse == 'full-sidebar'
                    ? 'text-primary dark:text-secondary bg-lightprimary dark:bg-primary hover:bg-lightprimary dark:hover:bg-primary'
                    : 'bg-transparent hover:bg-transparent hover:text-primary dark:hover:text-darklink'
                  }`}
                onClick={() => setIsCollapse('full-sidebar')}>
                <span className='flex items-center'>
                  <Icon
                    icon='tabler:layout-sidebar-right'
                    className='me-2 text-2xl'
                  />
                  Full
                </span>
              </Button>
              <Button
                color={'primary'}
                className={`border bg-transparent border-ld text-link dark:text-darklink hover:scale-105 transition-all rounded-md py-3 px-6 h-14 ${isCollapse == 'mini-sidebar'
                    ? 'text-primary dark:text-secondary bg-lightprimary dark:bg-primary hover:bg-lightprimary dark:hover:bg-primary'
                    : 'bg-transparent hover:bg-transparent hover:text-primary dark:hover:text-darklink'
                  }`}
                onClick={() => setIsCollapse('mini-sidebar')}>
                <span className='flex items-center'>
                  <Icon
                    icon='tabler:layout-sidebar-right-collapse'
                    className='me-2 text-2xl'
                  />
                  Collapse
                </span>
              </Button>
            </div>

            {/* Card  With */}
            <h4 className='text-base mb-2'>Card With</h4>
            <div className='flex flex-wrap  gap-4 mb-7'>
              <Button
                color={'primary'}
                className={`border bg-transparent btn-shadow border-ld text-link dark:text-darklink hover:scale-105 transition-all rounded-md py-3 px-6 h-14  ${!isCardShadow
                    ? 'text-primary dark:text-secondary bg-lightprimary dark:bg-primary hover:bg-lightprimary dark:hover:bg-primary'
                    : 'bg-transparent hover:bg-transparent hover:text-primary dark:hover:text-darklink'
                  }`}
                onClick={() => setIsCardShadow(false)}>
                <span className='flex items-center'>
                  <Icon icon='tabler:border-outer' className='me-2 text-2xl' />
                  Border
                </span>
              </Button>
              <Button
                color={'primary'}
                className={`border bg-transparent border-ld text-link dark:text-darklink hover:scale-105 transition-all rounded-md py-3 px-6 h-14 ${isCardShadow
                    ? 'text-primary dark:text-secondary bg-lightprimary dark:bg-primary hover:bg-lightprimary dark:hover:bg-primary'
                    : 'bg-transparent hover:bg-transparent hover:text-primary dark:hover:text-darklink'
                  }`}
                onClick={() => setIsCardShadow(true)}>
                <span className='flex items-center'>
                  <Icon icon='tabler:border-none' className='me-2 text-2xl' />
                  Shadow
                </span>
              </Button>
            </div>

            {/* Card  With */}
            <h4 className='text-base mb-2'>Theme Border Radius</h4>
            <RangeSlider
              id='default-range'
              value={isBorderRadius}
              min={4}
              max={24}
              onChange={(event: any) => setIsBorderRadius(event.target.value)}
            />
            <div>Current Value: {isBorderRadius}</div>
          </div>
        </SimpleBar>
      </Drawer>
    </div>
  );
};
