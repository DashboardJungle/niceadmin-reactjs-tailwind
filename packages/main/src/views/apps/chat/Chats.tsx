import ChatsApp from "src/components/apps/chat";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";




const BCrumb = [
  {
    href: '/',
    text: 'Dashboard',
  },
  {
    href: '',
    text: 'Chat',
  },
]

const Chats = () => {
  return (
    <>
      <BreadcrumbComp title="Chat App" links={BCrumb} />
      <ChatsApp />
    </>
  );
};

export default Chats;
