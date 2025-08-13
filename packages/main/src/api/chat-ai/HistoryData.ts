import { ChatHistoryItem } from 'src/types/apps/ai-chat';
import { http, HttpResponse } from 'msw';

export const chatHistory: ChatHistoryItem[] = [
  {
    id: 1,
    title: 'Skincare tips',
    que: 'How can I improve my skincare routine?',
    preview:
      'Cleanse twice daily, moisturize, and always wear sunscreen. Drink plenty of water and avoid touching your face unnecessarily.',
    status: 'active',
  },
  {
    id: 2,
    title: 'React JS',
    que: 'What is React?',
    preview:
      'React is a JavaScript library for building user interfaces, especially single-page applications.',
    status: 'active',
  },
  {
    id: 3,
    title: 'Hydration tips',
    que: 'How much water should I drink daily?',
    preview:
      'Aim for about 8 glasses (2 liters) daily, but adjust based on your activity level and climate.',
    status: 'active',
  },
  {
    id: 4,
    title: 'Reading habits',
    que: 'How can I develop a daily reading habit?',
    preview:
      'Set aside 10-15 minutes daily, choose books you enjoy, and keep a book handy during idle times.',
    status: 'active',
  },
  {
    id: 5,
    title: 'React JS Hooks',
    que: 'What is a hook in React?',
    preview:
      'Hooks are functions like useState and useEffect that let you use state and lifecycle features in functional components.',
    status: 'active',
  },
];

//  All Mocked Api
export const ChatHistoryhandlers = [
  // Mock api to get chat history

  http.get('/api/data/chat/history', () => {
    try {
      return HttpResponse.json({
        status: 200,
        msg: 'success',
        data: chatHistory,
      });
    } catch (error) {
      return HttpResponse.json({
        status: 400,
        msg: 'Internal server error',
        error,
      });
    }
  }),
];
