import { sub } from 'date-fns';
import { Chance } from 'chance';
import { uniqueId } from 'lodash';
import { userType } from '../../types/apps/users';

import emily from 'src/assets/images/profile/emily.svg';
import Juan from 'src/assets/images/profile/Juan.svg';
import olivia from 'src/assets/images/profile/olivia.svg';
import Kiley from 'src/assets/images/profile/Kiley.svg';
import jason from 'src/assets/images/profile/jason.svg';
import Dalton from 'src/assets/images/profile/Dalton.svg';
import ryan from 'src/assets/images/profile/ryan.svg';
import Janita from 'src/assets/images/profile/Janita.svg';
import Reva from 'src/assets/images/profile/Reva.svg';

import s1 from 'src/assets/images/products/updated-product/innovation.webp';
import s2 from 'src/assets/images/products/updated-product/book-growth.webp';
import s3 from 'src/assets/images/products/updated-product/psychology-of-money.webp';
import s4 from 'src/assets/images/products/updated-product/headphone.webp';
import s5 from 'src/assets/images/products/updated-product/macbook.webp';
import s6 from 'src/assets/images/products/updated-product/console.webp';
import s7 from 'src/assets/images/products/updated-product/red-dress.webp';
import s8 from 'src/assets/images/products/updated-product/shoe.webp';
import s9 from 'src/assets/images/products/updated-product/short-purse.webp';
import s10 from 'src/assets/images/products/updated-product/dino.webp';
import s11 from 'src/assets/images/products/updated-product/teddy.webp';
import s12 from 'src/assets/images/products/updated-product/angle-toy.webp';
import { http, HttpResponse } from 'msw';

const chance = new Chance();

const users: userType[] = [
  {
    id: uniqueId('#follow_'),
    avatar: emily,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: jason,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Dalton,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Janita,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Juan,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Kiley,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: olivia,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Reva,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: ryan,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Dalton,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: emily,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Janita,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: jason,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Juan,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Kiley,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: olivia,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Reva,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: ryan,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: Dalton,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
  {
    id: uniqueId('#follow_'),
    avatar: emily,
    name: chance.name(),
    role: chance.profession(),
    country: chance.country({ full: true }),
    isFollowed: chance.bool(),
  },
];

const gallery = [
  {
    id: uniqueId('#gallery_'),
    cover: s1,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s2,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 4, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s3,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 3, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s4,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 2, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s5,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 8, hours: 1, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s6,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s7,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 6, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s8,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 5, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s9,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s10,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s11,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
  },
  {
    id: uniqueId('#gallery_'),
    cover: s12,
    name: chance.sentence({ words: 3 }),
    time: sub(new Date(), { days: 1, hours: 6, minutes: 20 }),
  },
];

export const UserDataHandlers = [
  // Mock GET request to retrieve user data
  http.get('/api/data/users', () => {
    try {
      return HttpResponse.json({ status: 200, msg: 'Success', data: users });
    } catch (error) {
      return HttpResponse.json({ status: 200, msg: 'Internal server error', error });
    }
  }),

  // Mock GET request to retrieve gallery data
  http.get('/api/data/gallery', () => {
    try {
      return HttpResponse.json({ status: 200, msg: 'Success', data: gallery });
    } catch (error) {
      return HttpResponse.json({ status: 200, msg: 'Internal server error', error });
    }
  }),
];

export { users, gallery };
