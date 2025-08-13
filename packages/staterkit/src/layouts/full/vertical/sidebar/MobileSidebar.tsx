

import { Button, Sidebar, SidebarItemGroup, SidebarItems } from "flowbite-react";

import SidebarContent from "./Sidebaritems";
import NavItems from "./NavItems";
import NavCollapse from "./NavCollapse";
import SimpleBar from "simplebar-react";
import React, { useContext } from "react";
import FullLogo from "../../shared/logo/FullLogo";
import { Icon } from "@iconify/react/dist/iconify.js";
import { CustomizerContext } from "src/context/CustomizerContext";
import sidebarBg from 'src/assets/images/backgrounds/first-steps.png'

const MobileSidebar = () => {
  const { isCollapse } = useContext(CustomizerContext)
  return (
    <>
      <div className='flex'>
        <Sidebar
          className='fixed menu-sidebar pt-0 bg-white dark:bg-black z-10'
          aria-label='Sidebar with multi-level dropdown example'>
          <div className='px-6 flex items-center brand-logo overflow-hidden'>
            <FullLogo />
          </div>
          <SimpleBar className='h-[calc(100vh-300px)]'>
            <SidebarItems className={`px-6`}>
              <SidebarItemGroup className='sidebar-nav'>
                {SidebarContent.map((item, index) => (
                  <React.Fragment key={index}>
                    <h5 className='text-link font-bold text-xs dark:text-darklink caption'>
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
    </>
  );
};

export default MobileSidebar;
