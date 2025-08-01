


import NavItems from "../NavItems";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import React from "react";
import { SidebarCollapse, SidebarItemGroup } from "flowbite-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { HiOutlineChevronDown } from 'react-icons/hi'
import { twMerge } from 'tailwind-merge'
import { ChildItem } from "src/types/layout/sidebar";


interface NavCollapseProps {
  item: ChildItem;
}



const NavCollapse: React.FC<NavCollapseProps> = ({ item }: any) => {
  const location = useLocation();
  const pathname = location.pathname;

  // Determine if any child matches the current path
  const activeDD = item.children.find((t: { url: string }) => t.url === pathname);


  const { t } = useTranslation();




  return (
    <SidebarCollapse
      label={t(`${item.name}`)}
      open={activeDD ? true : false}
      icon={() => (
        <Icon
          icon={item.icon}
          height={24}
          width={24}
          className={`${activeDD
            ? 'text-secondary dark:text-secondary'
            : 'group-hover:text-primary'
            }my-0`}
        />
      )}
      className={`${activeDD
        ? 'text-secondary dark:text-secondary bg-primary dark:bg-primary hover:bg-primary dark:hover:bg-primary hover:!text-secondary'
        : ''
        } collapse-menu group`}
      renderChevronIcon={(theme, open) => {
        const IconComponent = open
          ? HiOutlineChevronDown
          : HiOutlineChevronDown
        return (
          <IconComponent
            aria-hidden
            className={`${twMerge(
              theme.label.icon.open[open ? 'on' : 'off']
            )} ${activeDD
              ? 'text-secondary dark:text-secondary '
              : 'dark:text-white/80 group-hover:text-primary'
              } drop-icon text-link`}
          />
        )
      }}>
      {/* Render child items */}
      {item.children && (
        <SidebarItemGroup className='sidebar-dropdown'>
          {item.children.map((child: any) => (
            <React.Fragment key={child.id}>
              {/* Render NavItems for child items */}
              {child.children ? (
                <NavCollapse item={child} /> // Recursive call for nested collapse
              ) : (
                <NavItems item={child} />
              )}
            </React.Fragment>
          ))}
        </SidebarItemGroup>
      )}
    </SidebarCollapse>
  );
};

export default NavCollapse;
