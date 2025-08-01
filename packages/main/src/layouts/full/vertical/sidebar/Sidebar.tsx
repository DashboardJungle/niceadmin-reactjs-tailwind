

import React, { useContext } from "react";
import { Button, Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";

import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import NavCollapse from "./NavCollapse";
import SimpleBar from "simplebar-react";
import { CustomizerContext } from "src/context/CustomizerContext";
import sidebarBg from 'src/assets/images/backgrounds/first-steps.png'

import { Icon } from "@iconify/react/dist/iconify.js";
import FullLogo from "../../shared/logo/FullLogo";

const SidebarLayout = () => {
  const { isCollapse } = useContext(CustomizerContext)

  return (
    <>
      <div className='xl:block hidden bg-white'>
        <div className='flex'>
          <Sidebar
            className='fixed !z-20 menu-sidebar bg-white dark:bg-black border-e border-border dark:border-darkborder'
            aria-label='Sidebar with multi-level dropdown example'>
            <div
              className={`${isCollapse === 'full-sidebar' ? 'px-5' : 'px-5'
                } flex items-center brand-logo overflow-hidden`}>
              <FullLogo />
            </div>

            <SimpleBar className='h-[calc(100vh-300px)]'>
              <SidebarItems
                className={`${isCollapse === 'full-sidebar' ? 'px-5' : 'px-4'
                  }`}>
                <SidebarItemGroup className='sidebar-nav'>
                  {SidebarContent.map((item, index) => (
                    <React.Fragment key={index}>
                      <h5 className='text-muted font-bold text-xs dark:text-lightgray! caption first:mt-0! mt-3.5! border-t border-border dark:border-darkborder'>
                        <span className='hide-menu leading-21'>
                          {item.heading?.toUpperCase()}
                        </span>
                        <Icon
                          icon='tabler:dots'
                          className='text-ld block mx-auto leading-6 dark:text-opacity-60 hide-icon'
                          height={18}
                        />
                      </h5>

                      {item.children?.map((child, index) => (
                        <React.Fragment key={child.id && index}>
                          {child.children ? (
                            <div className='collpase-items'>
                              <NavCollapse item={child} />
                            </div>
                          ) : (
                            <NavItems item={child} />
                          )}
                        </React.Fragment>
                      ))}
                    </React.Fragment>
                  ))}
                </SidebarItemGroup>
              </SidebarItems>
            </SimpleBar>
            {/* Sidebar Profile */}
            <div
              className={`p-4 ${isCollapse === 'full-sidebar'
                ? 'flex flex-col items-center'
                : 'hidden'
                }`}>
              <img src={sidebarBg} alt='sidebar_bg' width={80} height={80} />
              <h5 className='text-center mt-5 mb-1 text-lg'>Grab Nice Admin</h5>
              <p className='text-sm text-link dark:text-darklink text-center'>
                Customize your dashboard
              </p>
              <Button
                color={'secondary'}
                className='text-dark mt-4 rounded-2xl'>
                Download
              </Button>
            </div>
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default SidebarLayout;
