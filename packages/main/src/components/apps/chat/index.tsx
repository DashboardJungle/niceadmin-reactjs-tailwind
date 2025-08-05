

import { Drawer, HR } from 'flowbite-react';
import { useState } from 'react';
import ChatListing from './ChatListing';
import ChatContent from './ChatContent';
import ChatMsgSent from './ChatMsgSent';
import { ChatProvider } from 'src/context/ChatContext';
import CardBox from 'src/components/shared/CardBox';

const ChatsApp = () => {
  const [isOpenChat, setIsOpenChat] = useState(false);
  const handleClose = () => setIsOpenChat(false);
  return (
    <>
      <ChatProvider>
        <CardBox className="p-0 h-full">
          <div className="flex h-[calc(100vh-230px)]">
            {/* ------------------------------------------- */}
            {/* Left Part */}
            {/* ------------------------------------------- */}
            <Drawer
              open={isOpenChat}
              onClose={handleClose}
              className="lg:relative lg:translate-none lg:h-auto lg:bg-transparent max-w-[300px]  sm:max-w-[350px] w-full h-full  lg:z-0 "
            >
              <ChatListing />
            </Drawer>
            {/* ------------------------------------------- */}
            {/* Right part */}
            {/* ------------------------------------------- */}
            <div className="grow w-[70%] flex flex-col h-full">
              <div className="flex-1 min-h-0 overflow-hidden">
                <ChatContent onClickMobile={() => setIsOpenChat(true)} />
              </div>
              <div className="shrink-0">
                <HR className="my-0" />
                <ChatMsgSent />
              </div>
            </div>
          </div>
        </CardBox>
      </ChatProvider>
    </>
  );
};

export default ChatsApp;