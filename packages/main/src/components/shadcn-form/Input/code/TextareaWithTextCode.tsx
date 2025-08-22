import { Label } from 'flowbite-react';
import { Textarea } from 'src/components/shadcn-ui/Default-Ui/textarea';

const TextareaWithTextCode = () => {
  return (
    <>
      <div className="grid w-full gap-1.5">
        <Label htmlFor="message-2">Your Message</Label>
        <Textarea placeholder="Type your message here." id="message-2" />
        <p className="text-sm">Your message will be copied to the support team.</p>
      </div>
    </>
  );
};

export default TextareaWithTextCode;
