import { PostType } from '../../types/apps/userProfile';
import { Chance } from 'chance';

import emily from 'src/assets/images/profile/emily.png';
import Juan from 'src/assets/images/profile/Juan.png';
import olivia from 'src/assets/images/profile/olivia.png';
import Kiley from 'src/assets/images/profile/Kiley.png';
import jason from 'src/assets/images/profile/jason.png';
import Dalton from 'src/assets/images/profile/Dalton.png';

import s1 from 'src/assets/images/products/s1.jpg';
import s2 from 'src/assets/images/products/s2.jpg';
import s4 from 'src/assets/images/products/s4.jpg';
import { http, HttpResponse } from 'msw';

const chance = new Chance();

// social profile
export const posts: PostType[] = [
  {
    id: '1',
    profile: {
      id: '2',
      avatar: emily,
      name: 'Macky Dawn',
      time: '15 min ago',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [
        {
          img: s1,
          featured: true,
        },
      ],
      likes: {
        like: true,
        value: 67,
      },
      comments: [
        {
          id: '3',
          profile: {
            id: '4',
            avatar: Juan,
            name: 'Deran Mac',
            time: '8 min ago ',
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: true,
              value: 55,
            },
            replies: [],
          },
        },
        {
          id: '5',
          profile: {
            id: '6',
            avatar: jason,
            name: 'Jonathan Bg',
            time: '5 min ago ',
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: false,
              value: 68,
            },
            replies: [
              {
                id: '7',
                profile: {
                  id: '8',
                  avatar: jason,
                  name: 'Carry minati',
                  time: 'just now ',
                },
                data: {
                  comment: chance.paragraph({ sentences: 2 }),
                  likes: {
                    like: true,
                    value: 10,
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: '9',
    profile: {
      id: '10',
      avatar: jason,
      name: 'Carry Minati',
      time: 'now',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [],
      likes: {
        like: true,
        value: 1,
      },
      comments: [],
    },
  },
  {
    id: '11',
    profile: {
      id: '12',
      avatar: olivia,
      name: 'Genelia Desouza',
      time: '15 min ago ',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [
        {
          img: s2,
          title: 'Image Title',
        },
        {
          img: s4,
          title: 'Painter',
        },
      ],
      likes: {
        like: false,
        value: 320,
      },
      comments: [
        {
          id: '13',
          profile: {
            id: '14',
            avatar: Kiley,
            name: 'Ritesh Deshmukh',
            time: '15 min ago ',
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: true,
              value: 65,
            },
            replies: [],
          },
        },
      ],
    },
  },
  {
    id: '15',
    profile: {
      id: '16',
      avatar: Dalton,
      name: 'Himesh R',
      time: '15 min ago ',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [],
      video: 'ejqFyft90zQ?si=1TxNRUpR7HAxcrqY',
      likes: {
        like: true,
        value: 129,
      },
    },
  },
];

export const PostHandlers = [
  // Mock GET request to retrieve postData
  http.get('/api/data/postData', () => {
    try {
      return HttpResponse.json({ status: 200, msg: 'Success', data: posts });
    } catch (error) {
      return HttpResponse.json({ status: 200, msg: 'Internal server error', error });
    }
  }),

  // Api endpoint to add posts likes
  http.post('/api/data/posts/like', async ({ request }) => {
    try {
      const { postId } = (await request.json()) as { postId: number };
      const postIndex = posts.findIndex((x) => x.id === postId);
      const post = { ...posts[postIndex] };
      post.data = { ...post.data };
      post.data.likes = { ...post.data.likes };
      post.data.likes.value = post.data.likes.like
        ? post.data.likes.value + 1
        : post.data.likes.value - 1;
      post.data.likes.like = !post.data.likes.like;
      posts[postIndex] = post;

      return HttpResponse.json({ status: 200, msg: 'Success', data: posts });
    } catch (error) {
      return HttpResponse.json({ status: 200, msg: 'Internal server error', error });
    }
  }),

  // Api endpoint to add comment
  http.post('/api/data/posts/comments/add', async ({ request }) => {
    try {
      const { postId, comment } = (await request.json()) as { postId: number; comment: any };

      const postIndex = posts.findIndex((x) => x.id === postId);
      const post = posts[postIndex];
      const cComments = post.data.comments || [];
      post.data.comments = [...cComments, comment];
      return HttpResponse.json({ status: 200, msg: 'Success', data: posts });
    } catch (error) {
      return HttpResponse.json({ status: 200, msg: 'Internal server error', error });
    }
  }),

  // Api endpoint to add replies
  http.post('/api/data/posts/replies/add', async ({ request }) => {
    try {
      const { postId, commentId, reply } = (await request.json()) as {
        postId: number;
        commentId: number;
        reply: any;
      };
      const postIndex = posts.findIndex((x) => x.id === postId);
      const post = posts[postIndex];
      const cComments = post.data.comments || [];
      const commentIndex = cComments.findIndex((x) => x.id === commentId);
      const comment = cComments[commentIndex];
      if (comment && comment.data && comment.data.replies)
        comment.data.replies = [...comment.data.replies, reply];
      return HttpResponse.json({ status: 200, msg: 'Success', data: posts });
    } catch (error) {
      return HttpResponse.json({ status: 200, msg: 'Internal server error', error });
    }
  }),

  // Api endpoint to add likes to replies
  http.post('/api/data/posts/replies/like', async ({ request }) => {
    try {
      const { postId, commentId } = (await request.json()) as { postId: number; commentId: number };
      const postIndex = posts.findIndex((x) => x.id === postId);
      const post = posts[postIndex];
      const cComments = post.data.comments || [];
      const commentIndex = cComments.findIndex((x) => x.id === commentId);
      const comment = { ...cComments[commentIndex] };

      if (comment && comment.data && comment.data.likes)
        comment.data.likes.like = !comment.data.likes.like;
      if (comment && comment.data && comment.data.likes) {
        comment.data.likes.value = comment.data.likes.like
          ? comment.data.likes.value + 1
          : comment.data.likes.value - 1;
      }

      if (post && post.data && post.data.comments) post.data.comments[commentIndex] = comment;
      return HttpResponse.json({ status: 200, msg: 'Success', data: posts });
    } catch (error) {
      return HttpResponse.json({ status: 200, msg: 'Internal server error', error });
    }
  }),
];

export default posts;
