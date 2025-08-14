import { useContext, useState } from 'react';
import { Drawer } from 'flowbite-react';
import CardBox from '../../shared/CardBox';
import ChatAiListing from './ChatAiListing';
import { ChatAIContext } from 'src/context/AIChatContext';
import ChatAiContent from './ChatAiContent';
import ChatWindow from './ChatWindow';
import ChatAiMsgSent from './ChatAiMsgSent';

const ChatAppAi = () => {
  const [isOpenChatAi, setIsOpenChatAi] = useState(false);
  const [showChatWindow, setShowChatWindow] = useState(false);
  const { sendMessage, setChatList } = useContext(ChatAIContext)!;

  const handleClose = () => setIsOpenChatAi(false);

  const handleStartChat = async (suggestionText: string) => {
    setShowChatWindow(true);
    await sendMessage(suggestionText, true);
  };

  const handleSearchSubmit = async (text: string) => {
    if (!text.trim()) return;
    await handleStartChat(text);
  };

  const handleFileUpload = async (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setShowChatWindow(true);
    setChatList((prev: any) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'user',
        text: '',
        imageUrl,
      },
    ]);
    await sendMessage('Here is an image I uploaded.', true);
  };

  return (
    <>
      <CardBox className="p-0 overflow-hidden">
        <div className="flex h-[600px]">
          {/* ------------------------------------------- */}
          {/* Left Part */}
          {/* ------------------------------------------- */}
          <Drawer
            open={isOpenChatAi}
            onClose={handleClose}
            className="lg:relative lg:translate-none lg:h-auto lg:bg-transparent max-w-[350px] w-full  lg:z-0 lg:overflow-hidden"
          >
            <ChatAiListing setShowChatWindow={setShowChatWindow} />
          </Drawer>
          {/* ------------------------------------------- */}
          {/* Right part */}
          {/* ------------------------------------------- */}
          <div className="grow w-[70%] shrink-0 flex flex-col">
            {!showChatWindow ? (
              <ChatAiContent
                onClickMobile={() => setIsOpenChatAi(true)}
                setShowChatWindow={setShowChatWindow}
                handleStartChat={handleStartChat}
              />
            ) : (
              <ChatWindow onClickMobile={() => setIsOpenChatAi(true)} />
            )}

            {/* <ChatMsgSent /> */}
            <ChatAiMsgSent onSearchSubmit={handleSearchSubmit} onFileUpload={handleFileUpload} />
          </div>
        </div>
      </CardBox>
    </>
  );
};

export default ChatAppAi;
