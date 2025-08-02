import { useState } from "react";
import { Modal, ModalBody, ModalHeader, Tooltip } from "flowbite-react";
import { IconCode } from "@tabler/icons-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeModal = ({ children }: any) => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    };
    return (
        <div>
            <Tooltip content="Show Code" trigger="hover" className="whitespace-nowrap">
                <div className="group bg-lightprimary dark:bg-darkprimary text-primary hover:bg-primary  hover:cursor-pointer p-2 rounded-full">
                    <IconCode size={18} onClick={handleOpenModal} className="group-hover:text-white" />
                </div>
            </Tooltip>
            <Modal show={openModal} onClose={handleOpenModal}>
                <ModalHeader className="rounded-t-md border-b border-ld">
                    Sample Code
                </ModalHeader>

                <ModalBody className="overflow-y-auto !code-modal">
                    <SyntaxHighlighter language="html" style={atomDark}>{children}</SyntaxHighlighter>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default CodeModal;
