import ChatAppAi from 'src/components/apps/chat-ai';
import { ChatAIProvider } from 'src/context/AIChatContext';
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Chat-AI',
  },
];
const ChatAi = () => {
  return (
    <>
      <ChatAIProvider>
        <BreadcrumbComp title="Chat-AI" links={BCrumb} />
        <ChatAppAi />
      </ChatAIProvider>
    </>
  );
};

export default ChatAi;
