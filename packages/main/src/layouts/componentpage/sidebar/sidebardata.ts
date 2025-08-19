import { uniqueId } from 'lodash';

export interface ChildItem {
  id?: number | string;
  name?: string;
  url?: any;
}

export interface MenuItem {
  heading?: string;
  children?: ChildItem[];
}

export interface SidebarContentType {
  [library: string]: MenuItem[];
}

const SidebarContent: SidebarContentType = {
  flowbite: [
    {
      heading: 'Inputs',
      children: [
        {
          id: uniqueId(),
          name: 'Buttons',
          url: '/components/flowbite/buttons',
        },
        {
          id: uniqueId(),
          name: 'Button Group',
          url: '/components/flowbite/button-group',
        },
        {
          id: uniqueId(),
          name: 'Checkbox',
          url: '/components/flowbite/checkbox',
        },
        {
          id: uniqueId(),
          name: 'Radio',
          url: '/components/flowbite/radio',
        },
        {
          id: uniqueId(),
          name: 'Rating',
          url: '/components/flowbite/rating',
        },
        {
          id: uniqueId(),
          name: 'Toggle Switch',
          url: '/components/flowbite/toggle-switch',
        },
        {
          id: uniqueId(),
          name: 'Input',
          url: '/components/flowbite/input',
        },
      ],
    },
    {
      heading: 'Data display',
      children: [
        {
          id: uniqueId(),
          name: 'Badge',
          url: '/components/flowbite/badge',
        },
        {
          id: uniqueId(),
          name: 'Avatar',
          url: '/components/flowbite/avatar',
        },
        {
          id: uniqueId(),
          name: 'List Group',
          url: '/components/flowbite/listgroup',
        },
        {
          id: uniqueId(),
          name: 'Popover',
          url: '/components/flowbite/popover',
        },
        {
          id: uniqueId(),
          name: 'Toast',
          url: '/components/flowbite/toast',
        },
        {
          id: uniqueId(),
          name: 'Tooltip',
          url: '/components/flowbite/tooltip',
        },
        {
          id: uniqueId(),
          name: 'Typography',
          url: '/components/flowbite/typography',
        },
      ],
    },
    {
      heading: 'Feedback',
      children: [
        {
          id: uniqueId(),
          name: 'Alert',
          url: '/components/flowbite/alert',
        },
        {
          id: uniqueId(),
          name: 'Modal',
          url: '/components/flowbite/modals',
        },
        {
          id: uniqueId(),
          name: 'Progressbar',
          url: '/components/flowbite/progressbar',
        },
        {
          id: uniqueId(),
          name: 'Spinner',
          url: '/components/flowbite/spinner',
        },
      ],
    },
    {
      heading: 'Navigation',
      children: [
        {
          id: uniqueId(),
          name: 'Breadcrumb',
          url: '/components/flowbite/breadcrumb',
        },
        {
          id: uniqueId(),
          name: 'Pagination',
          url: '/components/flowbite/pagination',
        },
        {
          id: uniqueId(),
          name: 'Tabs',
          url: '/components/flowbite/tab',
        },
        {
          id: uniqueId(),
          name: 'Dropdown',
          url: '/components/flowbite/dropdown',
        },
        {
          id: uniqueId(),
          name: 'Sidebar',
          url: '/components/flowbite/sidebar',
        },
        {
          id: uniqueId(),
          name: 'Navbar',
          url: '/components/flowbite/navbar',
        },
        {
          id: uniqueId(),
          name: 'Mega Menu',
          url: '/components/flowbite/megamenu',
        },
        {
          id: uniqueId(),
          name: 'Footer',
          url: '/components/flowbite/footer',
        },
      ],
    },
    {
      heading: 'Surfaces',
      children: [
        {
          id: uniqueId(),
          name: 'Accordion',
          url: '/components/flowbite/accordion',
        },
        {
          id: uniqueId(),
          name: 'Card',
          url: '/components/flowbite/card',
        },
        {
          id: uniqueId(),
          name: 'Banner',
          url: '/components/flowbite/banner',
        },
        {
          id: uniqueId(),
          name: 'Table',
          url: '/components/flowbite/tables',
        },
        {
          id: uniqueId(),
          name: 'Drawer',
          url: '/components/flowbite/drawer',
        },
        {
          id: uniqueId(),
          name: 'Carousel',
          url: '/components/flowbite/carousel',
        },
      ],
    },
    {
      heading: 'Utils',
      children: [
        {
          id: uniqueId(),
          name: 'Datepicker',
          url: '/components/flowbite/datepicker',
        },
        {
          id: uniqueId(),
          name: 'Timeline',
          url: '/components/flowbite/timeline',
        },
        {
          id: uniqueId(),
          name: 'KBD',
          url: '/components/flowbite/kbd',
        },
      ],
    },
  ],
  shadcn: [
    {
      heading: 'Inputs',
      children: [
        {
          id: uniqueId(),
          name: 'Buttons',
          url: '/components/shadcn/buttons',
        },
        {
          id: uniqueId(),
          name: 'Input',
          url: '/components/shadcn/input',
        },
        {
          id: uniqueId(),
          name: 'Select',
          url: '/components/shadcn/select',
        },
        {
          id: uniqueId(),
          name: 'Checkbox',
          url: '/components/shadcn/checkbox',
        },
        {
          id: uniqueId(),
          name: 'Radio',
          url: '/components/shadcn/radio',
        },
        {
          id: uniqueId(),
          name: 'Combobox',
          url: '/components/shadcn/combobox',
        },
        {
          id: uniqueId(),
          name: 'Command',
          url: '/components/shadcn/command',
        },
      ],
    },
    {
      heading: 'Data display',
      children: [
        {
          id: uniqueId(),
          name: 'Avatar',
          url: '/components/shadcn/avatar',
        },
        {
          id: uniqueId(),
          name: 'Badge',
          url: '/components/shadcn/badge',
        },
        {
          id: uniqueId(),
          name: 'Tooltip',
          url: '/components/shadcn/tooltip',
        },
        {
          id: uniqueId(),
          name: 'Toast',
          url: '/components/shadcn/toast',
        },
        {
          id: uniqueId(),
          name: 'Skeleton',
          url: '/components/shadcn/skeleton',
        },
      ],
    },
    {
      heading: 'Feedback',
      children: [
        {
          id: uniqueId(),
          name: 'Alert',
          url: '/components/shadcn/alert',
        },
        {
          id: uniqueId(),
          name: 'Progressbar',
          url: '/components/shadcn/progressbar',
        },
      ],
    },
    {
      heading: 'Navigation',
      children: [
        {
          id: uniqueId(),
          name: 'Breadcrumb',
          url: '/components/shadcn/breadcrumb',
        },
        {
          id: uniqueId(),
          name: 'Tabs',
          url: '/components/shadcn/tab',
        },
        {
          id: uniqueId(),
          name: 'Dropdown',
          url: '/components/shadcn/dropdown',
        },
      ],
    },
    {
      heading: 'Surfaces',
      children: [
        {
          id: uniqueId(),
          name: 'Accordion',
          url: '/components/shadcn/accordion',
        },
        {
          id: uniqueId(),
          name: 'Card',
          url: '/components/shadcn/card',
        },
        {
          id: uniqueId(),
          name: 'Carousel',
          url: '/components/shadcn/carousel',
        },
        {
          id: uniqueId(),
          name: 'Collapsible',
          url: '/components/shadcn/collapsible',
        },
        {
          id: uniqueId(),
          name: 'Dialog',
          url: '/components/shadcn/dialogs',
        },
        {
          id: uniqueId(),
          name: 'Drawer',
          url: '/components/shadcn/drawer',
        },
      ],
    },
    {
      heading: 'Utils',
      children: [
        {
          id: uniqueId(),
          name: 'Datepicker',
          url: '/components/shadcn/datepicker',
        },
      ],
    },
    {
      heading: 'Charts',
      children: [
        {
          id: uniqueId(),
          name: 'Area Chart',
          url: '/components/shadcn/area',
        },
        {
          id: uniqueId(),
          name: 'Bar Chart',
          url: '/components/shadcn/bar',
        },
        {
          id: uniqueId(),
          name: 'Line Chart',
          url: '/components/shadcn/line',
        },
        {
          id: uniqueId(),
          name: 'Pie Chart',
          url: '/components/shadcn/pie',
        },
        {
          id: uniqueId(),
          name: 'Radar Chart',
          url: '/components/shadcn/radar',
        },
        {
          id: uniqueId(),
          name: 'Radial Chart',
          url: '/components/shadcn/radial',
        },
      ],
    },
  ],
  headlessui: [
    {
      heading: 'Inputs',
      children: [
        {
          id: uniqueId(),
          name: 'Buttons',
          url: '/components/headlessui/buttons',
        },
        {
          id: uniqueId(),
          name: 'Input',
          url: '/components/headlessui/input',
        },
        {
          id: uniqueId(),
          name: 'Textarea',
          url: '/components/headlessui/textarea',
        },
        {
          id: uniqueId(),
          name: 'Checkbox',
          url: '/components/headlessui/checkbox',
        },
        {
          id: uniqueId(),
          name: 'Radio Group',
          url: '/components/headlessui/radiogroup',
        },
        {
          id: uniqueId(),
          name: 'Switch',
          url: '/components/headlessui/switch',
        },
        {
          id: uniqueId(),
          name: 'Fieldset',
          url: '/components/headlessui/fieldset',
        },
        {
          id: uniqueId(),
          name: 'Combobox',
          url: '/components/headlessui/combobox',
        },
        {
          id: uniqueId(),
          name: 'Listbox',
          url: '/components/headlessui/listbox',
        },
        {
          id: uniqueId(),
          name: 'Select',
          url: '/components/headlessui/select',
        },
      ],
    },
    {
      heading: 'Data display',
      children: [
        {
          id: uniqueId(),
          name: 'Popover',
          url: '/components/headlessui/popover',
        },
        {
          id: uniqueId(),
          name: 'Disclosure',
          url: '/components/headlessui/disclosure',
        },
        {
          id: uniqueId(),
          name: 'Transition',
          url: '/components/headlessui/transition',
        },
      ],
    },
    {
      heading: 'Feedback',
      children: [
        {
          id: uniqueId(),
          name: 'Dialog',
          url: '/components/headlessui/dialog',
        },
      ],
    },
    {
      heading: 'Navigation',
      children: [
        {
          id: uniqueId(),
          name: 'Dropdown',
          url: '/components/headlessui/dropdown',
        },
        {
          id: uniqueId(),
          name: 'Tabs',
          url: '/components/headlessui/tabs',
        },
      ],
    },
  ],
};

export default SidebarContent;
