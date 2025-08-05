import { uniqueId } from 'lodash';
import { MenuItem } from 'src/types/layout/sidebar';

const SidebarContent: MenuItem[] = [
  {
    heading: 'Dashboards',
    children: [
      {
        name: 'Analytics',
        icon: 'solar:chart-square-line-duotone',
        id: uniqueId(),
        url: '/',
      },
      {
        name: 'eCommerce',
        icon: 'solar:bag-4-line-duotone',
        id: uniqueId(),
        url: '/dashboards/eCommerce',
      },
      {
        name: 'Modern',
        icon: 'solar:help-line-duotone',
        id: uniqueId(),
        url: '/dashboards/modern',
      },
    ],
  },
  {
    heading: 'APPS',
    children: [
      {
        name: 'Contacts',
        icon: 'solar:phone-line-duotone',
        id: uniqueId(),
        url: '/apps/contacts',
      },
      {
        name: 'Blogs',
        icon: 'solar:widget-add-line-duotone',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: 'Blog Post',
            url: '/apps/blog/post',
          },
          {
            id: uniqueId(),
            name: 'Blog Detail',
            url: '/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow',
          },
          {
            id: uniqueId(),
            name: 'Add Blog',
            url: '/apps/blog/addblog',
          },
          {
            id: uniqueId(),
            name: 'Edit Blog',
            url: '/apps/blog/editblog',
          },
        ],
      },
      {
        name: 'Ecommerce',
        icon: 'solar:cart-3-line-duotone',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: 'Shop',
            url: '/apps/ecommerce/shop',
          },
          {
            id: uniqueId(),
            name: 'Details',
            url: '/apps/ecommerce/detail/1',
          },
          {
            id: uniqueId(),
            name: 'List',
            url: '/apps/ecommerce/list',
          },
          {
            id: uniqueId(),
            name: 'Checkout',
            url: '/apps/ecommerce/checkout',
          },
          {
            id: uniqueId(),
            name: 'Add Product',
            url: '/apps/ecommerce/addproduct',
          },
          {
            id: uniqueId(),
            name: 'Edit Product',
            url: '/apps/ecommerce/editproduct',
          },
        ],
      },
      {
        name: 'Chats',
        icon: 'solar:chat-round-line-line-duotone',
        id: uniqueId(),
        url: '/apps/chats',
      },
      {
        name: 'Users',
        icon: 'solar:shield-user-outline',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: 'Profile',
            url: '/apps/user-profile/profile',
          },
          {
            id: uniqueId(),
            name: 'Followers',
            url: '/apps/user-profile/followers',
          },
          {
            id: uniqueId(),
            name: 'Friends',
            url: '/apps/user-profile/friends',
          },
          {
            id: uniqueId(),
            name: 'Gallery',
            url: '/apps/user-profile/gallery',
          },
        ],
      },
      {
        name: 'Notes',
        icon: 'solar:document-text-outline',
        id: uniqueId(),
        url: '/apps/notes',
      },
      {
        name: 'Calendar',
        icon: 'solar:calendar-mark-line-duotone',
        id: uniqueId(),
        url: '/apps/calendar',
      },
      {
        name: 'Email',
        icon: 'solar:letter-linear',
        id: uniqueId(),
        url: '/apps/email',
      },
      {
        name: 'Tickets',
        icon: 'solar:ticker-star-outline',
        id: uniqueId(),
        url: '/apps/tickets',
      },
      {
        name: 'Kanban',
        icon: 'solar:notebook-linear',
        id: uniqueId(),
        url: '/apps/kanban',
      },
      {
        name: 'Invoice',
        icon: 'solar:bill-check-outline',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: 'List',
            url: '/apps/invoice/list',
          },
          {
            id: uniqueId(),
            name: 'Details',
            url: '/apps/invoice/detail/PineappleInc',
          },
          {
            id: uniqueId(),
            name: 'Create',
            url: '/apps/invoice/create',
          },
          {
            id: uniqueId(),
            name: 'Edit',
            url: '/apps/invoice/edit/PineappleInc',
          },
        ],
      },
    ],
  },
  {
    heading: 'Pages',
    children: [
      {
        name: 'Landing Page',
        id: uniqueId(),
        icon: 'solar:tablet-linear',
        url: '/landingpage',
      },
      {
        name: 'Roll Base Access',
        id: uniqueId(),
        icon: 'solar:accessibility-broken',
        url: '/theme-pages/casl',
      },
      {
        name: 'Pricing',
        id: uniqueId(),
        icon: 'solar:dollar-minimalistic-linear',
        url: '/theme-pages/pricing',
      },
      {
        name: 'Account Setting',
        id: uniqueId(),
        icon: 'solar:settings-minimalistic-line-duotone',
        url: '/theme-pages/account-settings',
      },
      {
        name: 'FAQ',
        id: uniqueId(),
        icon: 'solar:question-circle-line-duotone',
        url: '/theme-pages/faq',
      },
      {
        name: 'Widgets',
        icon: 'solar:widget-line-duotone',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: 'Cards',
            url: '/widgets/cards',
          },
          {
            id: uniqueId(),
            name: 'Banners',
            url: '/widgets/banners',
          },
          {
            id: uniqueId(),
            name: 'Charts',
            url: '/widgets/charts',
          },
        ],
      },
    ],
  },
  {
    heading: 'Forms',
    children: [
      {
        name: 'Flowbite Forms',
        icon: 'solar:document-text-outline',
        id: uniqueId(),
        children: [
          {
            name: 'Forms Elements',
            id: uniqueId(),
            url: '/forms/form-elements',
          },
          {
            name: 'Forms Layouts',
            id: uniqueId(),
            url: '/forms/form-layouts',
          },
          {
            name: 'Forms Horizontal',
            id: uniqueId(),
            url: '/forms/form-horizontal',
          },
          {
            name: 'Forms Vertical',
            id: uniqueId(),
            url: '/forms/form-vertical',
          },
          {
            name: 'Forms Custom',
            id: uniqueId(),
            url: '/forms/form-custom',
          },
          {
            name: 'Form Validation',
            id: uniqueId(),
            url: '/forms/form-validation',
          },
        ],
      },
      {
        name: 'Shadcn Forms',
        icon: 'solar:widget-6-line-duotone',
        id: uniqueId(),
        children: [
          {
            name: 'Input',
            id: uniqueId(),
            url: '/shadcn-form/input',
          },
          {
            name: 'Select',
            id: uniqueId(),
            url: '/shadcn-form/select',
          },
          {
            name: 'Checkbox',
            id: uniqueId(),
            url: '/shadcn-form/checkbox',
          },
          {
            name: 'Radio',
            id: uniqueId(),
            url: '/shadcn-form/radio',
          },
        ],
      },
      {
        name: 'Headless Forms',
        icon: 'tabler:brand-terraform',
        id: uniqueId(),
        children: [
          {
            name: 'Buttons',
            id: uniqueId(),
            url: '/headless-form/buttons',
          },
          {
            name: 'Checkbox',
            id: uniqueId(),
            url: '/headless-form/checkbox',
          },
          {
            name: 'Combobox',
            id: uniqueId(),
            url: '/headless-form/combobox',
          },
          {
            name: 'Fieldset',
            id: uniqueId(),
            url: '/headless-form/fieldset',
          },
          {
            name: 'Input',
            id: uniqueId(),
            url: '/headless-form/input',
          },
          {
            name: 'Listbox',
            id: uniqueId(),
            url: '/headless-form/listbox',
          },
          {
            name: 'Radio Group',
            id: uniqueId(),
            url: '/headless-form/radiogroup',
          },
          {
            name: 'Select',
            id: uniqueId(),
            url: '/headless-form/select',
          },
          {
            name: 'Switch',
            id: uniqueId(),
            url: '/headless-form/switch',
          },
          {
            name: 'Textarea',
            id: uniqueId(),
            url: '/headless-form/textarea',
          },
        ],
      },
    ],
  },
  {
    heading: 'Tables',
    children: [
      {
        name: 'Flowbite Tables',
        icon: 'solar:three-squares-bold-duotone',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: 'Basic Table',
            url: '/tables/basic',
          },
          {
            id: uniqueId(),
            name: 'Striped Rows Table',
            url: '/tables/striped-row',
          },
          {
            id: uniqueId(),
            name: 'Hover Table',
            url: '/tables/hover-table',
          },
          {
            id: uniqueId(),
            name: 'Checkbox Table',
            url: '/tables/checkbox-table',
          },
        ],
      },
      {
        name: 'Shadcn Tables',
        icon: 'tabler:table-share',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: 'Basic Table',
            url: '/shadcn-tables/basic',
          },
        ],
      },
      {
        name: 'React Tables',
        icon: 'solar:atom-linear',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: 'Basic',
            url: '/react-tables/basic',
          },
          {
            id: uniqueId(),
            name: 'Dense',
            url: '/react-tables/dense',
          },
          {
            id: uniqueId(),
            name: 'Sorting',
            url: '/react-tables/sorting',
          },
          {
            id: uniqueId(),
            name: 'Filtering',
            url: '/react-tables/filtering',
          },
          {
            id: uniqueId(),
            name: 'Pagination',
            url: '/react-tables/pagination',
          },
          {
            id: uniqueId(),
            name: 'Row Selection',
            url: '/react-tables/row-selection',
          },
          {
            id: uniqueId(),
            name: 'Column Visibility',
            url: '/react-tables/columnvisibility',
          },
          {
            id: uniqueId(),
            name: 'Editable',
            url: '/react-tables/editable',
          },
          {
            id: uniqueId(),
            name: 'Sticky',
            url: '/react-tables/sticky',
          },
          {
            id: uniqueId(),
            name: 'Drag & Drop',
            url: '/react-tables/drag-drop',
          },
          {
            id: uniqueId(),
            name: 'Empty',
            url: '/react-tables/empty',
          },
          {
            id: uniqueId(),
            name: 'Expanding',
            url: '/react-tables/expanding',
          },
        ],
      },
      {
        name: 'Orders Datatable',
        icon: 'solar:server-minimalistic-line-duotone',
        id: uniqueId(),
        url: '/react-tables/order-datatable',
      },
      {
        name: 'Users Datatable',
        icon: 'solar:posts-carousel-horizontal-bold-duotone',
        id: uniqueId(),
        url: '/react-tables/user-datatable',
      },
    ],
  },
  {
    heading: 'UI ELEMENTS',
    children: [
      {
        name: 'Flowbite',
        icon: 'solar:waterdrops-line-duotone',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: 'Accordion',
            url: '/ui-components/accordion',
          },
          {
            id: uniqueId(),
            name: 'Badge',

            url: '/ui-components/badge',
          },
          {
            id: uniqueId(),
            name: 'Button',

            url: '/ui-components/buttons',
          },
          {
            id: uniqueId(),
            name: 'Dropdowns',

            url: '/ui-components/dropdown',
          },
          {
            id: uniqueId(),
            name: 'Modals',

            url: '/ui-components/modals',
          },
          {
            id: uniqueId(),
            name: 'Tab',

            url: '/ui-components/tab',
          },
          {
            id: uniqueId(),
            name: 'Tooltip',

            url: '/ui-components/tooltip',
          },
          {
            id: uniqueId(),
            name: 'Alert',

            url: '/ui-components/alert',
          },
          {
            id: uniqueId(),
            name: 'Progressbar',

            url: '/ui-components/progressbar',
          },
          {
            id: uniqueId(),
            name: 'Pagination',

            url: '/ui-components/pagination',
          },
          {
            id: uniqueId(),
            name: 'Breadcrumbs',

            url: '/ui-components/breadcrumb',
          },
          {
            id: uniqueId(),
            name: 'Drawer',

            url: '/ui-components/drawer',
          },
          {
            id: uniqueId(),
            name: 'Lists',

            url: '/ui-components/listgroup',
          },
          {
            id: uniqueId(),
            name: 'Carousel',

            url: '/ui-components/carousel',
          },
          {
            id: uniqueId(),
            name: 'Spinner',

            url: '/ui-components/spinner',
          },
          {
            id: uniqueId(),
            name: 'Avatar',

            url: '/ui-components/avatar',
          },
          {
            id: uniqueId(),
            name: 'Banner',

            url: '/ui-components/banner',
          },
          {
            id: uniqueId(),
            name: 'Button Group',

            url: '/ui-components/button-group',
          },
          {
            id: uniqueId(),
            name: 'Card',

            url: '/ui-components/card',
          },
          {
            id: uniqueId(),
            name: 'Datepicker',

            url: '/ui-components/datepicker',
          },
          {
            id: uniqueId(),
            name: 'Footer',

            url: '/ui-components/footer',
          },
          {
            id: uniqueId(),
            name: 'KBD',

            url: '/ui-components/kbd',
          },
          {
            id: uniqueId(),
            name: 'Mega Menu',

            url: '/ui-components/megamenu',
          },
          {
            id: uniqueId(),
            name: 'Navbar',

            url: '/ui-components/navbar',
          },
          {
            id: uniqueId(),
            name: 'Popover',

            url: '/ui-components/popover',
          },
          {
            id: uniqueId(),
            name: 'Rating',

            url: '/ui-components/rating',
          },
          {
            id: uniqueId(),
            name: 'Sidebar',

            url: '/ui-components/sidebar',
          },
          {
            id: uniqueId(),
            name: 'Tables',

            url: '/ui-components/tables',
          },
          {
            id: uniqueId(),
            name: 'Timeline',

            url: '/ui-components/timeline',
          },
          {
            id: uniqueId(),
            name: 'Toast',

            url: '/ui-components/toast',
          },
          {
            id: uniqueId(),
            name: 'Typography',

            url: '/ui-components/typography',
          },
        ],
      },
      {
        name: 'Headless',
        icon: 'solar:round-alt-arrow-down-outline',
        id: uniqueId(),
        children: [
          {
            name: 'Dropdown',

            id: uniqueId(),
            url: '/headless-ui/dropdown',
          },
          {
            name: 'Disclosure',

            id: uniqueId(),
            url: '/headless-ui/disclosure',
          },
          {
            name: 'Dialog',

            id: uniqueId(),
            url: '/headless-ui/dialog',
          },
          {
            name: 'Popover',

            id: uniqueId(),
            url: '/headless-ui/popover',
          },
          {
            name: 'Tabs',

            id: uniqueId(),
            url: '/headless-ui/tabs',
          },
          {
            name: 'Transition',

            id: uniqueId(),
            url: '/headless-ui/transition',
          },
        ],
      },
      {
        name: 'Shadcn UI',
        icon: 'solar:tag-horizontal-line-duotone',
        id: uniqueId(),
        children: [
          {
            id: uniqueId(),
            name: 'Badge',

            url: '/shadcn-ui/badge',
          },
          {
            id: uniqueId(),
            name: 'Buttons',

            url: '/shadcn-ui/buttons',
          },
          {
            id: uniqueId(),
            name: 'Dropdowns',

            url: '/shadcn-ui/dropdown',
          },
          {
            id: uniqueId(),
            name: 'Dialogs',

            url: '/shadcn-ui/dialogs',
          },
          {
            id: uniqueId(),
            name: 'Alert',

            url: '/shadcn-ui/alert',
          },
          {
            id: uniqueId(),
            name: 'Toast',

            url: '/shadcn-ui/toast',
          },
          {
            id: uniqueId(),
            name: 'Breadcrumbs',

            url: '/shadcn-ui/breadcrumb',
          },

          {
            id: uniqueId(),
            name: 'Carousel',

            url: '/shadcn-ui/carousel',
          },

          {
            id: uniqueId(),
            name: 'Card',

            url: '/shadcn-ui/card',
          },
          {
            id: uniqueId(),
            name: 'Datepicker',

            url: '/shadcn-ui/datepicker',
          },
          {
            id: uniqueId(),
            name: 'Combobox',

            url: '/shadcn-ui/combobox',
          },
          {
            id: uniqueId(),
            name: 'Collapsible',

            url: '/shadcn-ui/collapsible',
          },
          {
            id: uniqueId(),
            name: 'Command',

            url: '/shadcn-ui/command',
          },
          {
            id: uniqueId(),
            name: 'Skeleton',

            url: '/shadcn-ui/skeleton',
          },
          {
            id: uniqueId(),
            name: 'Avatar',

            url: '/shadcn-ui/avatar',
          },

          {
            id: uniqueId(),
            name: 'Tooltip',

            url: '/shadcn-ui/tooltip',
          },
          {
            name: 'Accordion',

            id: uniqueId(),
            url: '/shadcn-ui/accordion',
          },
          {
            id: uniqueId(),
            name: 'Tab',

            url: '/shadcn-ui/tab',
          },
          {
            id: uniqueId(),
            name: 'Progressbar',

            url: '/shadcn-ui/progressbar',
          },
          {
            id: uniqueId(),
            name: 'Drawer',

            url: '/shadcn-ui/drawer',
          },
        ],
      },
    ],
  },
  {
    heading: 'Charts',
    children: [
      {
        name: 'Line Chart',
        icon: 'tabler:chart-sankey',
        id: uniqueId(),
        url: '/charts/line',
      },
      {
        name: 'Area Chart',
        icon: 'tabler:chart-histogram',
        id: uniqueId(),
        url: '/charts/area',
      },
      {
        name: 'Gradient Chart',
        icon: 'tabler:chart-area-line',
        id: uniqueId(),
        url: '/charts/gradient',
      },
      {
        name: 'Candlestick',
        icon: 'tabler:chart-candle',
        id: uniqueId(),
        url: '/charts/candlestick',
      },
      {
        name: 'Column',
        icon: 'tabler:chart-bar',
        id: uniqueId(),
        url: '/charts/column',
      },
      {
        name: 'Doughnut & Pie',
        icon: 'tabler:chart-donut-2',
        id: uniqueId(),
        url: '/charts/doughnut',
      },
      {
        name: 'Radialbar & Radar',
        icon: 'tabler:chart-arcs',
        id: uniqueId(),
        url: '/charts/radialbar',
      },
    ],
  },
  {
    heading: 'Icons',
    children: [
      {
        id: uniqueId(),
        name: 'Tabler Icons',
        icon: 'tabler:archive',
        url: '/icons/tabler',
      },
      {
        id: uniqueId(),
        name: 'Iconify Icons',
        icon: 'tabler:mood-smile',
        url: '/icons/iconify',
      },
    ],
  },
  {
    heading: 'Auth',
    children: [
      {
        id: uniqueId(),
        name: 'Login',
        icon: 'solar:login-3-line-duotone',
        children: [
          {
            id: uniqueId(),
            name: 'Side Login',
            url: '/auth/auth1/login',
          },
          {
            id: uniqueId(),
            name: 'Boxed Login',
            url: '/auth/auth2/login',
          },
        ],
      },
      {
        name: 'Register',
        id: uniqueId(),
        icon: 'solar:user-plus-rounded-line-duotone',
        children: [
          {
            id: uniqueId(),
            name: 'Side Register',
            url: '/auth/auth1/register',
          },
          {
            id: uniqueId(),
            name: 'Boxed Register',
            url: '/auth/auth2/register',
          },
        ],
      },
      {
        name: 'Forgot Password',
        id: uniqueId(),
        icon: 'solar:password-minimalistic-input-line-duotone',
        children: [
          {
            id: uniqueId(),
            name: 'Side Forgot Pwd',
            url: '/auth/auth1/forgot-password',
          },
          {
            id: uniqueId(),
            name: 'Boxed Forgot Pwd',
            url: '/auth/auth2/forgot-password',
          },
        ],
      },
      {
        name: 'Two Steps',
        id: uniqueId(),
        icon: 'solar:compass-big-line-duotone',
        children: [
          {
            id: uniqueId(),
            name: 'Side Two Steps',
            url: '/auth/auth1/two-steps',
          },
          {
            id: uniqueId(),
            name: 'Boxed Two Steps',
            url: '/auth/auth2/two-steps',
          },
        ],
      },
      {
        id: uniqueId(),
        name: 'Error',
        icon: 'solar:folder-error-line-duotone',
        url: '/auth/error',
      },
      {
        id: uniqueId(),
        name: 'Maintenance',
        icon: 'solar:settings-minimalistic-line-duotone',
        url: '/auth/maintenance',
      },
    ],
  },
  {
    heading: 'Others',
    children: [
      {
        name: 'Menu Level',
        id: uniqueId(),
        icon: 'solar:align-left-line-duotone',
        children: [
          {
            id: uniqueId(),
            name: 'Level 1',
            icon: 'tabler:circle',
            url: '/l1',
          },
          {
            id: uniqueId(),
            name: 'Level 1.1',
            icon: 'tabler:circle',
            url: '/l1.1',
            children: [
              {
                id: uniqueId(),
                name: 'Level 2',
                icon: 'tabler:circle',
                url: '/l2',
              },
              {
                id: uniqueId(),
                name: 'Level 2.1',
                icon: 'tabler:circle',
                url: '/l2.1',

                children: [
                  {
                    id: uniqueId(),
                    name: 'Level 3',
                    icon: 'tabler:circle',
                    url: '/l3',
                  },
                  {
                    id: uniqueId(),
                    name: 'Level 3.1',
                    icon: 'tabler:circle',
                    url: '/l3.1',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Disabled',
        icon: 'solar:forbidden-circle-line-duotone',
        id: uniqueId(),
        url: '#',
        disabled: true,
      },
      {
        name: 'SubCaption',
        icon: 'solar:star-broken',
        id: uniqueId(),
        url: '#',
        disabled: false,
        subtitle: 'This is the subtitle',
      },
      {
        name: 'Chip',
        icon: 'solar:medal-ribbons-star-line-duotone',
        id: uniqueId(),
        url: '#',
        badge: true,
        badgeType: 'filled',
      },
      {
        name: 'Outlined',
        icon: 'solar:smile-circle-line-duotone',
        id: uniqueId(),
        url: '#',
        badge: true,
        badgeType: 'outlined',
      },
      {
        name: 'External Link',
        icon: 'solar:star-fall-minimalistic-2-line-duotone',
        id: uniqueId(),
        url: 'https://www.google.co.in/',
      },
    ],
  },
];
export default SidebarContent;
