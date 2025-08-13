import React from 'react';

import { Badge, SidebarItem } from 'flowbite-react';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { ChildItem } from 'src/types/layout/sidebar';

interface NavItemsProps {
  item: ChildItem;
}
const NavItems: React.FC<NavItemsProps> = ({ item }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { t } = useTranslation();

  const navigate = useNavigate();
  return (
    <>
      <SidebarItem
        onClick={() => navigate(item.url)}
        className={`${
          item.disabled
            ? 'opacity-50 cursor-default hover:bg-transparent hover:text-link '
            : item.url == pathname
            ? `${
                item.icon ? '!text-secondary' : '!text-primary'
              } mb-0.5 bg-primary hover:bg-primary dark:bg-primary dark:hover:bg-primary hover:text-white cursor-pointer`
            : 'text-link bg-transparent hover:bg-lightprimary dark:hover:bg-darkprimary group/link cursor-pointer '
        }  `}
      >
        <span className="flex gap-3.5 align-center items-center truncate">
          {item.icon ? (
            <Icon icon={item.icon} className={`${item.color} my-0.5`} height={21} />
          ) : (
            <span
              className={`${
                item.url == pathname
                  ? 'rounded-full mx-1 group-hover/link:bg-primary !bg-primary border border-primary size-2'
                  : 'size-2 !bg-transparent border  border-dark dark:border-darklink rounded-full mx-1 group-hover/link:!border-primary'
              } `}
            ></span>
          )}
          <div className="max-w-36 overflow-hidden hide-menu flex-1 !leading-normal text-15">
            {t(`${item.name}`)}
            {item.subtitle ? <p className="text-xs mt-1">{t(`${item.subtitle}`)}</p> : null}
          </div>
          {item.badge ? (
            item.badgeType === 'filled' ? (
              <Badge color="primary"> {item.badgeContent}</Badge>
            ) : (
              <span className="px-2 py-1 border-primary border rounded-full  bg-transparent text-primary font-semibold text-xs sidebar-badge">
                Outline
              </span>
            )
          ) : null}
        </span>
      </SidebarItem>
    </>
  );
};

export default NavItems;
