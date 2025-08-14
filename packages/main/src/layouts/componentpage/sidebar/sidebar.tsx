import { Sidebar, SidebarItemGroup, SidebarItems } from 'flowbite-react';
import SimpleBar from 'simplebar-react';
import SidebarContent, { SidebarContentType, MenuItem } from './sidebardata';
import React, { useState, useMemo, useCallback } from 'react';
import NavItems from './NavItem';
import 'simplebar-react/dist/simplebar.min.css';
import Search from './search';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/components/shadcn-ui/Default-Ui/select';
import { useParams, useNavigate } from 'react-router';

import flowbiteImg from '/src/assets/images/svgs/flowbite.svg';
import shadcnImg from '/src/assets/images/svgs/shadcn.svg';
import shadcnDarkImg from '/src/assets/images/svgs/shadcn-white.svg';
import headlessuiImg from '/src/assets/images/svgs/headless.svg';

interface ComponentSidebarProps {
  selectedLibrary: string;
  onLibraryChange: (library: string) => void;
}

export default function ComponentSidebar({
  onLibraryChange,
  selectedLibrary,
}: ComponentSidebarProps) {
  const navigate = useNavigate();
  const params = useParams();

  const [search, setSearch] = useState('');
  const menu: MenuItem[] = SidebarContent[selectedLibrary as keyof SidebarContentType] || [];

  // Filter menu and children by search with debouncing
  const filteredMenu = useMemo(() => {
    if (!search.trim()) return menu;
    const lower = search.toLowerCase();
    return menu
      .map((item) => {
        // Check if heading matches
        const headingMatch = item.heading?.toLowerCase().includes(lower);
        // Filter children
        const filteredChildren = item.children?.filter((child) =>
          child.name?.toLowerCase().includes(lower),
        );
        if (headingMatch || (filteredChildren && filteredChildren.length > 0)) {
          return {
            ...item,
            children: filteredChildren,
          };
        }
        return null;
      })
      .filter(Boolean) as MenuItem[];
  }, [menu, search]);

  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
  }, []);

  // library change
  const currentComponent = params?.component?.toString() ?? 'buttons';
  const handleLibraryChange = useCallback(
    (library: string) => {
      onLibraryChange(library);
      setSearch(''); // Clear search when library changes

      const targetComponent = currentComponent.toLowerCase();
      navigate(`/components/${library}/${targetComponent}`);
    },
    [onLibraryChange, navigate, currentComponent],
  );

  const libraries = useMemo(
    () => [
      { key: 'flowbite', label: 'Flowbite', icon: flowbiteImg },
      {
        key: 'shadcn',
        label: 'ShadCN',
        icon: shadcnImg,
        darkicon: shadcnDarkImg,
      },
      {
        key: 'headlessui',
        label: 'HeadlessUI',
        icon: headlessuiImg,
      },
    ],
    [],
  );

  return (
    <div className="h-full rounded-md overflow-hidden bg-transparent">
      <Sidebar className="h-full bg-transparent border-0 shadow-none">
        {/* select ui library */}
        <div className="p-3 sm:p-5 sm:pb-0 pb-0">
          <Select value={selectedLibrary} onValueChange={handleLibraryChange}>
            <SelectTrigger className="text-sm sm:text-base">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {libraries.map((lib) => (
                  <SelectItem value={lib.key} key={lib.key}>
                    <div className="flex items-center gap-2">
                      <img
                        src={lib.icon}
                        alt={lib.label}
                        width={20}
                        height={20}
                        className={`${lib.key === 'shadcn' ? 'block dark:hidden' : ''} rounded-sm`}
                      />
                      {lib.darkicon && (
                        <img
                          src={lib.darkicon}
                          alt={lib.label}
                          width={20}
                          height={20}
                          className="rounded-sm hidden dark:block"
                        />
                      )}
                      <span className="text-sm sm:text-base">{lib.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* search bar */}
        <div className="p-3 sm:p-5">
          <Search onSearch={handleSearchChange} />
        </div>

        {/* menu */}
        <SimpleBar className="h-[calc(100vh-70px)] lg:h-[calc(100vh-150px)]">
          <SidebarItems className="px-3 sm:px-5 last:pb-5">
            <SidebarItemGroup>
              {filteredMenu.length > 0 ? (
                filteredMenu.map((item, i) => (
                  <React.Fragment key={item.heading || i}>
                    <p className="text-gray-400 font-bold text-xs caption first:mt-0! mt-3.5! border-t border-gray-700 pt-3">
                      {item.heading?.toUpperCase()}
                    </p>
                    {item.children?.map((child, j) => (
                      <React.Fragment key={child.id ?? j}>
                        <NavItems item={child} />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <p className="text-sm">No components found</p>
                  <p className="text-xs mt-1">Try adjusting your search</p>
                </div>
              )}
            </SidebarItemGroup>
          </SidebarItems>
        </SimpleBar>
      </Sidebar>
    </div>
  );
}
