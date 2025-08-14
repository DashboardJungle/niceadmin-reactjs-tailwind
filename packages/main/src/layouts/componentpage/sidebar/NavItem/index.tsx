import React from 'react';
import { ChildItem } from '../sidebardata';
import { SidebarItem } from 'flowbite-react';
import { useLocation } from 'react-router';

interface NavItemsProps {
  item: ChildItem;
}

const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isActive = item.url === pathname;

  return (
    <>
      <SidebarItem
        href={item.url}
        aria-current={isActive ? 'page' : undefined}
        className={
          isActive
            ? 'mb-0.5 bg-primary hover:bg-primary dark:bg-primary dark:hover:bg-primary text-secondary hover:text-secondary dark:hover:text-white'
            : 'text-link bg-transparent hover:bg-lightprimary dark:hover:bg-darkprimary group/link '
        }
      >
        <span className="flex gap-3.5 align-center items-center truncate w-full">
          <span
            className={
              isActive
                ? 'rounded-full mx-1 group-hover/link:bg-primary bg-primary border border-secondary size-2'
                : 'size-2 !bg-transparent border border-dark dark:border-darklink rounded-full mx-1 group-hover/link:!border-primary'
            }
          ></span>
          <div className="max-w-36 overflow-hidden hide-menu flex-1 !leading-normal text-15">
            {item.name}
          </div>
        </span>
      </SidebarItem>
    </>
  );
};

export default NavItems;
