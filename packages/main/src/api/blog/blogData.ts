import { Chance } from 'chance';
import { random } from 'lodash';
import { sub } from 'date-fns';
import s1 from 'src/assets/images/blog/blog-image1.jpg';
import s2 from 'src/assets/images/blog/blog-image2.jpg';
import s3 from 'src/assets/images/blog/blog-image3.jpg';
import s4 from 'src/assets/images/blog/blog-image4.jpg';
import s5 from 'src/assets/images/blog/blog-image5.jpg';
import s6 from 'src/assets/images/blog/blog-image6.jpg';
import s7 from 'src/assets/images/blog/blog-image7.jpg';
import s8 from 'src/assets/images/blog/blog-image8.jpg';
import s9 from 'src/assets/images/blog/blog-image9.jpg';

import user3 from 'src/assets/images/profile/user-3.jpg';
import user4 from 'src/assets/images/profile/user-4.jpg';
import user5 from 'src/assets/images/profile/user-5.jpg';
import olivia from 'src/assets/images/profile/olivia.png';
import emily from 'src/assets/images/profile/emily.png';
import Juan from 'src/assets/images/profile/Juan.png';
import ryan from 'src/assets/images/profile/ryan.png';
import Reva from 'src/assets/images/profile/Reva.png';
import Kiley from 'src/assets/images/profile/Kiley.png';
import jason from 'src/assets/images/profile/jason.png';

import { uniqueId } from 'lodash';
import { BlogType, BlogPostType } from 'src/types/apps/blog';
import { http, HttpResponse } from 'msw';

const chance = new Chance();

const BlogComment: BlogType[] = [
  {
    id: uniqueId('#comm_'),
    profile: {
      id: uniqueId(),
      avatar: user5,
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [],
  },
  {
    id: uniqueId('#comm_'),
    profile: {
      id: uniqueId(),
      avatar: user3,
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [
      {
        id: uniqueId('#comm_'),
        profile: {
          id: uniqueId(),
          avatar: user3,
          name: chance.name(),
        },
        time: chance.date(),
        comment: chance.paragraph({ sentences: 2 }),
      },
    ],
  },
  {
    id: uniqueId('#comm_'),
    profile: {
      id: uniqueId(),
      avatar: user4,
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [],
  },
];

const BlogPost: BlogPostType[] = [
  {
    id: uniqueId(),
    title: 'Garmins Instinct Crossover is a rugged hybrid smartwatch',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s9,
    createdAt: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: olivia,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: uniqueId(),
    title: 'After Twitter Staff Cuts, Survivors Face Radio Silence',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s2,
    createdAt: sub(new Date(), { days: 7, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: emily,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: uniqueId(),
    title: 'Apple is apparently working on a new streamlined accessibility for iOS',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s3,
    createdAt: sub(new Date(), { days: 5, hours: 2, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Design',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: Juan,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: uniqueId(),
    title: 'Why Figma is selling to Adobe for $20 billion',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s4,
    createdAt: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Design',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: ryan,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: uniqueId(),
    title: 'Streaming video way before it was cool, go dark tomorrow',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s9,
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: olivia,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: uniqueId(),
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones ',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s5,
    createdAt: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: Juan,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: uniqueId(),
    title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s7,
    createdAt: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Social',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: Reva,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: uniqueId(),
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s8,
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Health',
    featured: false,
    author: {
      id: uniqueId(),
      avatar: Reva,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: uniqueId(),
    title: 'Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s1,
    createdAt: sub(new Date(), { days: 5, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: true,
    author: {
      id: uniqueId(),
      avatar: Kiley,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: uniqueId(),
    title: 'Presented by Max Rushden with Barry Glendenning, Philippe Auclair',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s6,
    createdAt: sub(new Date(), { days: 0, hours: 1, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Health',
    featured: true,
    author: {
      id: uniqueId(),
      avatar: jason,
      name: chance.name(),
    },
    comments: BlogComment,
  },
];

// Mocked Apis
export const Bloghandlers = [
  // Mock api endpoint to fetch all blogposts
  http.get('/api/data/blog/BlogPosts', () => {
    try {
      return HttpResponse.json({ status: 200, data: BlogPost, msg: 'success' });
    } catch (error) {
      return HttpResponse.json({ status: 400, msg: 'something went wrong' });
    }
  }),

  // Mock api endpoint to add post info
  http.post('/api/data/blog/post/add', async ({ request }) => {
    try {
      const { postId, newComment } = (await request.json()) as any;
      const postIndex = BlogPost.findIndex((x) => x.id === postId);
      const post = BlogPost[postIndex];
      const cComments = post.comments || [];
      post.comments = [newComment, ...cComments];
      return HttpResponse.json({
        status: 200,
        data: BlogPost,
        msg: 'success',
      });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'something went wrong',
        error,
      });
    }
  }),
];
