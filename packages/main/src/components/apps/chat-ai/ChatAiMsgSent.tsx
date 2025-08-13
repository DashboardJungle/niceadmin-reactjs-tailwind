import { Icon } from '@iconify/react';
import { FileInput, Label, TextInput } from 'flowbite-react';
import React, { useRef, useState } from 'react';

const ChatAiMsgSent = ({
  onSearchSubmit,
  onFileUpload,
}: {
  onSearchSubmit: (text: string) => void;
  onFileUpload?: (file: File) => void;
}) => {
  const [input, setInput] = useState('');

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;
    onSearchSubmit(input);
    setInput('');
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onFileUpload) {
      onFileUpload(file);
    }
  };
  return (
    <>
      <div className="p-6">
        <div className="relative">
          <TextInput
            className="!form-control trans-input w-full"
            required
            value={input}
            onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
              setInput(e.target.value)
            }
          />
          <div className="absolute top-0.5 left-1" onClick={handleImageClick}>
            <Label className="btn-circle-hover cursor-pointer" htmlFor="dropzone-file">
              <Icon
                icon="solar:gallery-outline"
                width={20}
                height={20}
                className="text-link dark:text-darklink hover:text-primary dark:hover:text-primary"
              />

              <FileInput
                id="dropzone-file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </Label>
          </div>
          <div className="absolute top-1 right-1.5" onClick={handleSend}>
            <div className="rounded-full p-1.5 cursor-pointer bg-primary hover:bg-primary/90">
              <Icon icon="solar:arrow-up-linear" width={18} height={18} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatAiMsgSent;
