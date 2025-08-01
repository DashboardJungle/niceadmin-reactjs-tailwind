import { uniqueId } from 'lodash';

const Menuitems = [
  {
    id: uniqueId(),
    title: 'Dashboards',
    icon: 'solar:chart-square-line-duotone',
    href: '',
    column: 0,
    children: [
      {
        title: 'Analytics',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/',
      },
      {
        title: 'eCommerce',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/dashboards/eCommerce',
      },
      {
        title: 'Modern',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/dashboards/modern',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'APPS',
    icon: 'solar:widget-line-duotone',
    href: '',
    column: 0,
    children: [
      {
        title: 'Contacts',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/apps/contacts',
      },
      {
        title: 'Blogs',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '',
        children: [
          {
            title: 'Blog Post',
            id: uniqueId(),
            href: '/apps/blog/post',
          },
          {
            title: 'Blog Detail',
            id: uniqueId(),
            href: '/apps/blog/detail/streaming-video-way-before-it-was-cool-go-dark-tomorrow',
          },
        ],
      },
      {
        title: 'Ecommerce',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '',
        children: [
          {
            title: 'Shop',
            id: uniqueId(),
            href: '/apps/ecommerce/shop',
          },
          {
            title: 'Details',
            id: uniqueId(),
            href: '/apps/ecommerce/detail/1',
          },
          {
            title: 'List',
            id: uniqueId(),
            href: '/apps/ecommerce/list',
          },
          {
            title: 'Checkout',
            id: uniqueId(),
            href: '/apps/ecommerce/checkout',
          },
          {
            title: 'Add Product',
            id: uniqueId(),
            href: '/apps/ecommerce/addproduct',
          },
          {
            title: 'Edit Product',
            id: uniqueId(),
            href: '/apps/ecommerce/editproduct',
          },
        ],
      },
      {
        title: 'Chats',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/apps/chats',
      },
      {
        title: 'Users',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '',
        children: [
          {
            title: 'Profile',
            id: uniqueId(),
            href: '/apps/user-profile/profile',
          },
          {
            title: 'Followers',
            id: uniqueId(),
            href: '/apps/user-profile/followers',
          },
          {
            title: 'Friends',
            id: uniqueId(),
            href: '/apps/user-profile/followers',
          },
          {
            title: 'Gallery',
            id: uniqueId(),
            href: '/apps/user-profile/gallery',
          },
        ],
      },
      {
        title: 'Notes',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/apps/notes',
      },
      {
        title: 'Calendar',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/apps/calendar',
      },
      {
        title: 'Email',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/apps/email',
      },
      {
        title: 'Tickets',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/apps/tickets',
      },
      {
        title: 'Kanban',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/apps/kanban',
      },
      {
        title: 'Invoice',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '',
        children: [
          {
            title: 'List',
            id: uniqueId(),
            href: '/apps/invoice/list',
          },
          {
            title: 'Details',
            id: uniqueId(),
            href: '/apps/invoice/detail/PineappleInc',
          },
          {
            title: 'Create',
            id: uniqueId(),
            href: '/apps/invoice/create',
          },
          {
            title: 'Edit',
            id: uniqueId(),
            href: '/apps/invoice/edit/PineappleInc',
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Pages',
    icon: 'solar:document-text-line-duotone',
    href: '',
    column: 0,
    children: [
      {
        title: 'Roll Base Access',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/theme-pages/casl',
      },
      {
        title: 'Pricing',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/theme-pages/pricing',
      },
      {
        title: 'Account Setting',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/theme-pages/account-settings',
      },
      {
        title: 'FAQ',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/theme-pages/faq',
      },
      {
        title: 'Widgets',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '',
        children: [
          {
            title: 'Cards',
            id: uniqueId(),
            href: '/widgets/cards',
          },
          {
            title: 'Banners',
            id: uniqueId(),
            href: '/widgets/banners',
          },
          {
            title: 'Charts',
            id: uniqueId(),
            href: '/widgets/charts',
          },
        ],
      },
      {
        title: 'Icons',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '',
        children: [
          {
            title: 'Tabler Icons',
            id: uniqueId(),
            href: '/icons/tabler',
          },
          {
            title: 'Iconify Icons',
            id: uniqueId(),
            href: '/icons/iconify',
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Forms',
    icon: 'solar:documents-line-duotone',
    href: '',
    column: 0,
    children: [
      {
        title: 'Forms Elements',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/forms/form-elements',
      },
      {
        title: 'Forms Layouts',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/forms/form-layouts',
      },
      {
        title: 'Forms Horizontal',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/forms/form-horizontal',
      },
      {
        title: 'Forms Vertical',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/forms/form-vertical',
      },
      {
        title: 'Forms Custom',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/forms/form-custom',
      },
      {
        title: 'Form Validation',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/forms/form-validation',
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Tables',
    icon: 'solar:three-squares-bold-duotone',
    href: '',
    column: 0,
    children: [
      {
        title: 'Basic Table',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/tables/basic',
      },
      {
        title: 'Striped Rows Table',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/tables/striped-row',
      },
      {
        title: 'Hover Table',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/tables/hover-table',
      },
      {
        title: 'Checkbox Table',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/tables/checkbox-table',
      },
      {
        title: 'Orders Datatable',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/react-tables/order-datatable',
      },
      {
        title: 'Users Datatable',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/react-tables/user-datatable',
      },
      {
        title: 'React Tables',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '',
        children: [
          {
            title: 'Basic',
            id: uniqueId(),
            href: '/react-tables/basic',
          },
          {
            title: 'Dense',
            id: uniqueId(),
            href: '/react-tables/dense',
          },
          {
            title: 'Sorting',
            id: uniqueId(),
            href: '/react-tables/sorting',
          },
          {
            title: 'Filtering',
            id: uniqueId(),
            href: '/react-tables/filtering',
          },
          {
            title: 'Pagination',
            id: uniqueId(),
            href: '/react-tables/pagination',
          },
          {
            title: 'Row Selection',
            id: uniqueId(),
            href: '/react-tables/row-selection',
          },
          {
            title: 'Column Visibility',
            id: uniqueId(),
            href: '/react-tables/columnvisibility',
          },
          {
            title: 'Editable',
            id: uniqueId(),
            href: '/react-tables/editable',
          },
          {
            title: 'Sticky',
            id: uniqueId(),
            href: '/react-tables/sticky',
          },
          {
            title: 'Drag & Drop',
            id: uniqueId(),
            href: '/react-tables/drag-drop',
          },
          {
            title: 'Empty',
            id: uniqueId(),
            href: '/react-tables/empty',
          },
          {
            title: 'Expanding',
            id: uniqueId(),
            href: '/react-tables/expanding',
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    title: 'Charts',
    icon: 'solar:graph-new-up-line-duotone',
    href: '',
    column: 0,
    children: [
      {
        title: 'Line Chart',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/charts/line',
      },
      {
        title: 'Area Chart',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/charts/area',
      },
      {
        title: 'Gradient Chart',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/charts/gradient',
      },
      {
        title: 'Candlestick',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/charts/candlestick',
      },
      {
        title: 'Column',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/charts/column',
      },
      {
        title: 'Doughnut & Pie',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/charts/doughnut',
      },
      {
        title: 'Radialbar & Radar',
        icon: 'tabler:circle',
        id: uniqueId(),
        href: '/charts/radialbar',
      },
    ],
  },
];
export default Menuitems;
