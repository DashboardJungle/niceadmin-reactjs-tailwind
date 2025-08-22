import { Icon } from '@iconify/react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import MyCustomLink from '../MyCustomLink';

const ClosingManuallyCode = () => {
  return (
    <>
      <Menu>
        <MenuButton className="ui-button  bg-primary gap-2">
          Terms <Icon icon="solar:alt-arrow-down-outline" height={18} />
        </MenuButton>
        <MenuItems anchor="bottom" className="ui-dropdown">
          <MenuItem>
            {({ close }) => (
              <MyCustomLink href="/" onClick={close}>
                Read and accept
              </MyCustomLink>
            )}
          </MenuItem>
        </MenuItems>
      </Menu>
    </>
  );
};

export default ClosingManuallyCode;
