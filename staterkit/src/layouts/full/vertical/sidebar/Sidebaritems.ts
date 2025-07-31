export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  disabled?: boolean;
  subtitle?: string;
  badge?: boolean;
  badgeType?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
  disabled?: boolean;
  subtitle?: string;
  badgeType?: string;
  badge?: boolean;
}

import { uniqueId } from 'lodash';

const SidebarContent: MenuItem[] = [
  {
    heading: 'Home',
    children: [
      {
        name: 'Sample',
        icon: 'solar:chart-square-line-duotone',
        id: uniqueId(),
        url: '/',
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
