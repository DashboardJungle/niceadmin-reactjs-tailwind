import { uniqueId } from 'lodash'

export interface ChildItem {
  id?: number | string
  name?: string
  url?: any
}

export interface MenuItem {
  heading?: string
  children?: ChildItem[]
}

export interface SidebarContentType {
  [library: string]: MenuItem[]
}

const SidebarContent: SidebarContentType = {
  flowbite: [
    {
      heading: 'Inputs',
      children: [
        {
          id: uniqueId(),
          name: 'Buttons',
          url: '/componentpage/ui-components/flowbite/buttons',
        },
        {
          id: uniqueId(),
          name: 'Button Group',
          url: '/componentpage/ui-components/flowbite/button-group',
        },
        {
          id: uniqueId(),
          name: 'Checkbox',
          url: '/componentpage/ui-components/flowbite/checkbox',
        },
        {
          id: uniqueId(),
          name: 'Radio',
          url: '/componentpage/ui-components/flowbite/radio',
        },
        {
          id: uniqueId(),
          name: 'Rating',
          url: '/componentpage/ui-components/flowbite/rating',
        },
        {
          id: uniqueId(),
          name: 'Toggle Switch',
          url: '/componentpage/ui-components/flowbite/toggle-switch',
        },
        {
          id: uniqueId(),
          name: 'Input',
          url: '/componentpage/ui-components/flowbite/input',
        },
      ],
    },
    {
      heading: 'Data display',
      children: [
        {
          id: uniqueId(),
          name: 'Badge',
          url: '/componentpage/ui-components/flowbite/badge',
        },
        {
          id: uniqueId(),
          name: 'Avatar',
          url: '/componentpage/ui-components/flowbite/avatar',
        },
        {
          id: uniqueId(),
          name: 'List Group',
          url: '/componentpage/ui-components/flowbite/listgroup',
        },
        {
          id: uniqueId(),
          name: 'Popover',
          url: '/componentpage/ui-components/flowbite/popover',
        },
        {
          id: uniqueId(),
          name: 'Toast',
          url: '/componentpage/ui-components/flowbite/toast',
        },
        {
          id: uniqueId(),
          name: 'Tooltip',
          url: '/componentpage/ui-components/flowbite/tooltip',
        },
        {
          id: uniqueId(),
          name: 'Typography',
          url: '/componentpage/ui-components/flowbite/typography',
        },
      ],
    },
    {
      heading: 'Feedback',
      children: [
        {
          id: uniqueId(),
          name: 'Alert',
          url: '/componentpage/ui-components/flowbite/alert',
        },
        {
          id: uniqueId(),
          name: 'Modal',
          url: '/componentpage/ui-components/flowbite/modals',
        },
        {
          id: uniqueId(),
          name: 'Progressbar',
          url: '/componentpage/ui-components/flowbite/progressbar',
        },
        {
          id: uniqueId(),
          name: 'Spinner',
          url: '/componentpage/ui-components/flowbite/spinner',
        },
      ],
    },
    {
      heading: 'Navigation',
      children: [
        {
          id: uniqueId(),
          name: 'Breadcrumb',
          url: '/componentpage/ui-components/flowbite/breadcrumb',
        },
        {
          id: uniqueId(),
          name: 'Pagination',
          url: '/componentpage/ui-components/flowbite/pagination',
        },
        {
          id: uniqueId(),
          name: 'Tabs',
          url: '/componentpage/ui-components/flowbite/tab',
        },
        {
          id: uniqueId(),
          name: 'Dropdown',
          url: '/componentpage/ui-components/flowbite/dropdown',
        },
        {
          id: uniqueId(),
          name: 'Sidebar',
          url: '/componentpage/ui-components/flowbite/sidebar',
        },
        {
          id: uniqueId(),
          name: 'Navbar',
          url: '/componentpage/ui-components/flowbite/navbar',
        },
        {
          id: uniqueId(),
          name: 'Mega Menu',
          url: '/componentpage/ui-components/flowbite/megamenu',
        },
        {
          id: uniqueId(),
          name: 'Footer',
          url: '/componentpage/ui-components/flowbite/footer',
        },
      ],
    },
    {
      heading: 'Surfaces',
      children: [
        {
          id: uniqueId(),
          name: 'Accordian',
          url: '/componentpage/ui-components/flowbite/accordian',
        },
        {
          id: uniqueId(),
          name: 'Card',
          url: '/componentpage/ui-components/flowbite/card',
        },
        {
          id: uniqueId(),
          name: 'Banner',
          url: '/componentpage/ui-components/flowbite/banner',
        },
        {
          id: uniqueId(),
          name: 'Table',
          url: '/componentpage/ui-components/flowbite/tables',
        },
        {
          id: uniqueId(),
          name: 'Drawer',
          url: '/componentpage/ui-components/flowbite/drawer',
        },
        {
          id: uniqueId(),
          name: 'Carousel',
          url: '/componentpage/ui-components/flowbite/carousel',
        },
      ],
    },
    {
      heading: 'Utils',
      children: [
        {
          id: uniqueId(),
          name: 'Datepicker',
          url: '/componentpage/ui-components/flowbite/datepicker',
        },
        {
          id: uniqueId(),
          name: 'Timeline',
          url: '/componentpage/ui-components/flowbite/timeline',
        },
        {
          id: uniqueId(),
          name: 'KBD',
          url: '/componentpage/ui-components/flowbite/kbd',
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
          url: '/componentpage/ui-components/shadcn/buttons',
        },
        {
          id: uniqueId(),
          name: 'Input',
          url: '/componentpage/ui-components/shadcn/input',
        },
        {
          id: uniqueId(),
          name: 'Select',
          url: '/componentpage/ui-components/shadcn/select',
        },
        {
          id: uniqueId(),
          name: 'Checkbox',
          url: '/componentpage/ui-components/shadcn/checkbox',
        },
        {
          id: uniqueId(),
          name: 'Radio',
          url: '/componentpage/ui-components/shadcn/radio',
        },
        {
          id: uniqueId(),
          name: 'Combobox',
          url: '/componentpage/ui-components/shadcn/combobox',
        },
        {
          id: uniqueId(),
          name: 'Command',
          url: '/componentpage/ui-components/shadcn/command',
        },
      ],
    },
    {
      heading: 'Data display',
      children: [
        {
          id: uniqueId(),
          name: 'Avatar',
          url: '/componentpage/ui-components/shadcn/avatar',
        },
        {
          id: uniqueId(),
          name: 'Badge',
          url: '/componentpage/ui-components/shadcn/badge',
        },
        {
          id: uniqueId(),
          name: 'Tooltip',
          url: '/componentpage/ui-components/shadcn/tooltip',
        },
        {
          id: uniqueId(),
          name: 'Skeleton',
          url: '/componentpage/ui-components/shadcn/skeleton',
        },
      ],
    },
    {
      heading: 'Feedback',
      children: [
        {
          id: uniqueId(),
          name: 'Alert',
          url: '/componentpage/ui-components/shadcn/alert',
        },
        {
          id: uniqueId(),
          name: 'Progressbar',
          url: '/componentpage/ui-components/shadcn/progressbar',
        },
      ],
    },
    {
      heading: 'Navigation',
      children: [
        {
          id: uniqueId(),
          name: 'Breadcrumb',
          url: '/componentpage/ui-components/shadcn/breadcrumb',
        },
        {
          id: uniqueId(),
          name: 'Tabs',
          url: '/componentpage/ui-components/shadcn/tab',
        },
        {
          id: uniqueId(),
          name: 'Dropdown',
          url: '/componentpage/ui-components/shadcn/dropdown',
        },
      ],
    },
    {
      heading: 'Surfaces',
      children: [
        {
          id: uniqueId(),
          name: 'Accordion',
          url: '/componentpage/ui-components/shadcn/accordion',
        },
        {
          id: uniqueId(),
          name: 'Card',
          url: '/componentpage/ui-components/shadcn/card',
        },
        {
          id: uniqueId(),
          name: 'Carousel',
          url: '/componentpage/ui-components/shadcn/carousel',
        },
        {
          id: uniqueId(),
          name: 'Collapsible',
          url: '/componentpage/ui-components/shadcn/collapsible',
        },
        {
          id: uniqueId(),
          name: 'Dialog',
          url: '/componentpage/ui-components/shadcn/dialogs',
        },
        {
          id: uniqueId(),
          name: 'Drawer',
          url: '/componentpage/ui-components/shadcn/drawer',
        },
      ],
    },
    {
      heading: 'Utils',
      children: [
        {
          id: uniqueId(),
          name: 'Datepicker',
          url: '/componentpage/ui-components/shadcn/datepicker',
        },
      ],
    },
    {
      heading: 'Charts',
      children: [
        {
          id: uniqueId(),
          name: 'Area Chart',
          url: '/componentpage/ui-components/shadcn/area',
        },
        {
          id: uniqueId(),
          name: 'Bar Chart',
          url: '/componentpage/ui-components/shadcn/bar',
        },
        {
          id: uniqueId(),
          name: 'Line Chart',
          url: '/componentpage/ui-components/shadcn/line',
        },
        {
          id: uniqueId(),
          name: 'Pie Chart',
          url: '/componentpage/ui-components/shadcn/pie',
        },
        {
          id: uniqueId(),
          name: 'Radar Chart',
          url: '/componentpage/ui-components/shadcn/radar',
        },
        {
          id: uniqueId(),
          name: 'Radial Chart',
          url: '/componentpage/ui-components/shadcn/radial',
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
          url: '/componentpage/ui-components/headlessui/buttons',
        },
        {
          id: uniqueId(),
          name: 'Input',
          url: '/componentpage/ui-components/headlessui/input',
        },
        {
          id: uniqueId(),
          name: 'Textarea',
          url: '/componentpage/ui-components/headlessui/textarea',
        },
        {
          id: uniqueId(),
          name: 'Checkbox',
          url: '/componentpage/ui-components/headlessui/checkbox',
        },
        {
          id: uniqueId(),
          name: 'Radio Group',
          url: '/componentpage/ui-components/headlessui/radiogroup',
        },
        {
          id: uniqueId(),
          name: 'Switch',
          url: '/componentpage/ui-components/headlessui/switch',
        },
        {
          id: uniqueId(),
          name: 'Fieldset',
          url: '/componentpage/ui-components/headlessui/fieldset',
        },
        {
          id: uniqueId(),
          name: 'Combobox',
          url: '/componentpage/ui-components/headlessui/combobox',
        },
        {
          id: uniqueId(),
          name: 'Listbox',
          url: '/componentpage/ui-components/headlessui/listbox',
        },
        {
          id: uniqueId(),
          name: 'Select',
          url: '/componentpage/ui-components/headlessui/select',
        },
      ],
    },
    {
      heading: 'Data display',
      children: [
        {
          id: uniqueId(),
          name: 'Popover',
          url: '/componentpage/ui-components/headlessui/popover',
        },
        {
          id: uniqueId(),
          name: 'Disclosure',
          url: '/componentpage/ui-components/headlessui/disclosure',
        },
        {
          id: uniqueId(),
          name: 'Transition',
          url: '/componentpage/ui-components/headlessui/transition',
        },
      ],
    },
    {
      heading: 'Feedback',
      children: [
        {
          id: uniqueId(),
          name: 'Dialog',
          url: '/componentpage/ui-components/headlessui/dialog',
        },
      ],
    },
    {
      heading: 'Navigation',
      children: [
        {
          id: uniqueId(),
          name: 'Dropdown',
          url: '/componentpage/ui-components/headlessui/dropdown',
        },
        {
          id: uniqueId(),
          name: 'Tabs',
          url: '/componentpage/ui-components/headlessui/tabs',
        },
      ],
    },
  ],
}

export default SidebarContent
