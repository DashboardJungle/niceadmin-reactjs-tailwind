import { Icon } from '@iconify/react/dist/iconify.js';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

const TransitionDropdownCode = () => {
  return (
    <>
      <Menu>
        <MenuButton className="ui-button  bg-success gap-2">
          My Account <Icon icon="solar:alt-arrow-down-outline" height={18} />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom"
          className="ui-dropdown origin-top transition duration-500 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <a className="ui-dropdown-item" href="/settings">
              Settings
            </a>
          </MenuItem>
          <MenuItem>
            <a className="ui-dropdown-item" href="/support">
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a className="ui-dropdown-item" href="/license">
              License
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  );
};

export default TransitionDropdownCode;
