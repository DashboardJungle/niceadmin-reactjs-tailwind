import CardBox from '../../shared/CardBox';
import OrderDataTable from './OrderDataTable';

import Juan from 'src/assets/images/profile/Juan.png';
import olivia from 'src/assets/images/profile/olivia.png';
import Kiley from 'src/assets/images/profile/Kiley.png';
import ryan from 'src/assets/images/profile/ryan.png';
import jason from 'src/assets/images/profile/jason.png';
import Janita from 'src/assets/images/profile/Janita.png';

import s2 from 'src/assets/images/products/updated-product/book-growth.webp';

import s4 from 'src/assets/images/products/updated-product/headphone.webp';
import s5 from 'src/assets/images/products/updated-product/macbook.webp';
import s6 from 'src/assets/images/products/updated-product/console.webp';
import s7 from 'src/assets/images/products/updated-product/red-dress.webp';
import s8 from 'src/assets/images/products/updated-product/shoe.webp';

import s10 from 'src/assets/images/products/updated-product/dino.webp';
import s11 from 'src/assets/images/products/updated-product/teddy.webp';
import s12 from 'src/assets/images/products/updated-product/angle-toy.webp';

function OrderTable() {
  const orders = [
    {
      id: 'ORD-001',
      avatar: jason,
      customerName: 'John Doe',
      status: 'Pending',
      badgecolor: 'lightwarning',
      date: '06-10-2025',
      time: '10:31AM',
      amount: 80.5,
      address: '123 Main St, New York, NY',
      items: [
        {
          image: s4,
          name: 'Headphone',
          sku: 'TS-001',
          quantity: 2,
          price: 20,
        },
        {
          image: s2,
          name: 'Books',
          sku: 'MG-009',
          quantity: 1,
          price: 10.5,
        },
      ],
    },
    {
      id: 'ORD-002',
      avatar: Juan,
      customerName: 'Jane Smith',
      status: 'Completed',
      badgecolor: 'lightsuccess',
      date: '06-09-2025',
      time: '11:31AM',
      amount: 814.0,
      address: '456 Elm St, Los Angeles, CA',
      items: [
        {
          image: s5,
          name: 'Macbook pro',
          sku: 'ES-021',
          quantity: 1,
          price: 799.0,
        },
      ],
    },
    {
      id: 'ORD-003',
      avatar: ryan,
      customerName: 'Bob Johnson',
      status: 'Shipped',
      badgecolor: 'lightprimary',
      date: '06-08-2025',
      time: '12:01AM',
      amount: 407.3,
      address: '789 Pine St, Chicago, IL',
      items: [
        {
          image: s11,
          name: 'Teddy',
          sku: 'TS-024',
          quantity: 2,
          price: 99.4,
        },
        {
          image: s10,
          name: 'Tiny Dino',
          sku: 'TS-024',
          quantity: 2,
          price: 89.25,
        },
      ],
    },
    {
      id: 'ORD-004',
      avatar: olivia,
      customerName: 'Georgeanna Ramero',
      status: 'Cancelled',
      badgecolor: 'lighterror',
      date: '06-08-2025',
      time: '01:06AM',
      amount: 1127.1,
      address: '19214 110th Rd, Saint Albans, NY, 1141',
      items: [
        {
          image: s8,
          name: 'Red hills',
          sku: 'FS-027',
          quantity: 1,
          price: 497.8,
        },
        {
          image: s7,
          name: 'Red Dress',
          sku: 'FS-029',
          quantity: 1,
          price: 599.3,
        },
      ],
    },
    {
      id: 'ORD-005',
      avatar: Kiley,
      customerName: 'Dalton Paden',
      status: 'Processing',
      badgecolor: 'lightinfo',
      date: '06-06-2025',
      time: '02:34AM',
      amount: 311.0,
      address: '19103 Stefani Ave, Cerritos, CA, 90703',
      items: [
        {
          image: s6,
          name: 'X-box console',
          sku: 'ES-018',
          quantity: 1,
          price: 296.0,
        },
      ],
    },
    {
      id: 'ORD-006',
      avatar: Janita,
      customerName: 'Cami Macha',
      status: 'Pending',
      badgecolor: 'lightwarning',
      date: '09-06-2025',
      time: '02:34AM',
      amount: 213.0,
      address: '930 Fruit Ave, Farrell, PA, 16121',
      items: [
        {
          image: s12,
          name: 'Soft Toys',
          sku: 'TS-016',
          quantity: 2,
          price: 99.0,
        },
      ],
    },
  ];

  return (
    <CardBox>
      <OrderDataTable data={orders} />
    </CardBox>
  );
}

export default OrderTable;
