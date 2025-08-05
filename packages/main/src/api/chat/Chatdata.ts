import { Chance } from 'chance';
import { sub } from 'date-fns';
import { uniqueId } from 'lodash';

import emily from 'src/assets/images/profile/emily.svg';
import Juan from 'src/assets/images/profile/Juan.svg';
import ryan from 'src/assets/images/profile/ryan.svg';

import Kiley from 'src/assets/images/profile/Kiley.svg';
import jason from 'src/assets/images/profile/jason.svg';
import Janita from 'src/assets/images/profile/Janita.svg';
import Dalton from 'src/assets/images/profile/Dalton.svg';

import s1 from 'src/assets/images/blog/blog-image1.jpg';

import adobe from 'src/assets/images/chat/icon-adobe.svg';
import chrome from 'src/assets/images/chat/icon-chrome.svg';
import figma from 'src/assets/images/chat/icon-figma.svg';
import java from 'src/assets/images/chat/icon-javascript.svg';
import zip from 'src/assets/images/chat/icon-zip-folder.svg';

import { http, HttpResponse } from 'msw';
import { ChatsType } from 'src/types/apps/chat';

const chance = new Chance();

const ChatData: ChatsType[] = [
  {
    id: 1,
    name: 'James Johnson',
    status: 'online',
    thumb: ryan,
    recent: false,
    excerpt: 'Theme Developer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
          { icon: chrome, file: 'homepage-design.fig', fileSize: '3MB' },
          { icon: figma, file: 'about-us.html', fileSize: '1KB' },
          { icon: java, file: 'work-project.zip', fileSize: '20MB' },
          { icon: zip, file: 'custom.js', fileSize: '2MB' },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 30 }),
        msg: chance.sentence({ words: 10 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: uniqueId(),
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        msg: s1,
        senderId: uniqueId(),
        type: 'image',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 5 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 2,
    name: 'Maria Hernandez',
    status: 'away',
    thumb: Janita,
    recent: true,
    excerpt: 'Doctor',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: uniqueId(),
        type: 'text',
        attachment: [
          { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
          { icon: chrome, file: 'homepage-design.fig', fileSize: '3MB' },
          { icon: java, file: 'work-project.zip', fileSize: '20MB' },
          { icon: zip, file: 'custom.js', fileSize: '2MB' },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 30 }),
        msg: chance.sentence({ words: 10 }),
        senderId: uniqueId(),
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 2,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        msg: s1,
        senderId: 2,
        type: 'image',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: uniqueId(),
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 3,
    name: 'David Smith',
    status: 'busy',
    thumb: Juan,
    recent: false,
    excerpt: 'Hacker',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
          { icon: zip, file: 'custom.js', fileSize: '2MB' },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 30 }),
        msg: chance.sentence({ words: 10 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 4,
    name: 'Maria Rodriguez',
    status: 'offline',
    thumb: emily,
    recent: true,
    excerpt: 'Please wait outside of the house',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 4,
        type: 'text',
        attachment: [
          { icon: java, file: 'work-project.zip', fileSize: '20MB' },
          { icon: zip, file: 'custom.js', fileSize: '2MB' },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 11 }),
        msg: s1,
        senderId: uniqueId(),
        type: 'image',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 4,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 1 }),
        msg: chance.sentence({ words: 7 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 5,
    name: 'Robert Smith',
    status: 'online',
    thumb: jason,
    recent: true,
    excerpt: 'Front End Developer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
          { icon: chrome, file: 'homepage-design.fig', fileSize: '3MB' },
          { icon: figma, file: 'about-us.html', fileSize: '1KB' },
          { icon: java, file: 'work-project.zip', fileSize: '20MB' },
          { icon: zip, file: 'custom.js', fileSize: '2MB' },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 30 }),
        msg: chance.sentence({ words: 10 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: uniqueId(),
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        msg: s1,
        senderId: 5,
        type: 'image',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 5 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 5,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 6,
    name: 'Joseph Sarah',
    status: 'busy',
    thumb: Kiley,
    recent: false,
    excerpt: 'Graphics Designer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          { icon: chrome, file: 'homepage-design.fig', fileSize: '3MB' },
          { icon: java, file: 'work-project.zip', fileSize: '20MB' },
          { icon: zip, file: 'custom.js', fileSize: '2MB' },
        ],
        id: uniqueId(),
      },
      {
        msg: s1,
        senderId: uniqueId(),
        type: 'image',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 5 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 2 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 6,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 7,
    name: 'Thomas Smith',
    status: 'away',
    thumb: Dalton,
    recent: true,
    excerpt: 'Back End Developer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
          { icon: chrome, file: 'homepage-design.fig', fileSize: '3MB' },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 1 }),
        msg: chance.sentence({ words: 10 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 15 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 7,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 7,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 8,
    name: 'David Elizabeth',
    status: 'offline',
    thumb: Juan,
    recent: false,
    excerpt: 'Theme Developer',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
          { icon: java, file: 'work-project.zip', fileSize: '20MB' },
          { icon: zip, file: 'custom.js', fileSize: '2MB' },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 1 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 8,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 9,
    name: 'Charles Martha',
    status: 'online',
    thumb: Kiley,
    recent: false,
    excerpt: 'Administrator',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          { icon: java, file: 'work-project.zip', fileSize: '20MB' },
          { icon: zip, file: 'custom.js', fileSize: '2MB' },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 8 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 8 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 5 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 9,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 2 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 9,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
  {
    id: 10,
    name: 'Samuel Eliza',
    status: 'online',
    thumb: jason,
    recent: false,
    excerpt: 'Doctor',
    messages: [
      {
        createdAt: sub(new Date(), { hours: 10 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 1,
        type: 'text',
        attachment: [
          { icon: adobe, file: 'service-task.pdf', fileSize: '2MB' },
          { icon: zip, file: 'custom.js', fileSize: '2MB' },
        ],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 11 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { hours: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 3,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
      {
        createdAt: sub(new Date(), { minutes: 6 }),
        msg: chance.sentence({ words: 5 }),
        senderId: 10,
        type: 'text',
        attachment: [],
        id: uniqueId(),
      },
    ],
  },
];

// All Mocked Apis
export const Chathandlers = [
  //  Api endpoint to get chats
  http.get('/api/data/chat/ChatData', () => {
    try {
      return HttpResponse.json({ status: 200, msg: 'success', data: ChatData });
    } catch (error) {
      return HttpResponse.json({ status: 200, msg: 'failed', data: error });
    }
  }),

  //  Api endpoint to add message
  http.post('/api/sendMessage', async ({ request }: any) => {
    try {
      const { chatId, message } = await request.json();
      if (!chatId || !message) {
        return HttpResponse.json({
          status: 400,
          msg: 'failed',
          error: 'Invalid request. Missing parameters.',
        });
      }

      // Simulate creating a new message
      const newMessage: any = {
        id: Math.random(), // Use a random ID for simplicity
        senderId: uniqueId(), // Generate a new senderId
        msg: message,
        createdAt: new Date().toISOString(),
        type: 'text', // Assuming the message type is text for simplicity
        attachment: [], // No attachment initially
      };

      // Find the chat by chatId and push the new message
      const chat = ChatData.find((chat) => chat.id === chatId);
      if (chat) {
        chat.messages.push(newMessage);
      } else {
        return HttpResponse.json({ status: 400, msg: 'failed', error: 'Chat not found.' });
      }
      return HttpResponse.json({ status: 201, msg: 'Success', data: ChatData });
    } catch (error) {
      return HttpResponse.json({ status: 400, msg: 'failed', error: 'Failed to add message' });
    }
  }),
];

export default ChatData;
