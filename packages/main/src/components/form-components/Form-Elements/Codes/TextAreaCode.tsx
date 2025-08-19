import { Label, Textarea } from 'flowbite-react';

const TextAreaCode = () => {
  return (
    <>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="comment">Your message</Label>
        </div>
        <Textarea
          id="comment"
          placeholder="Leave a comment..."
          required
          rows={8}
          className="!form-control-textarea"
        />
      </div>
    </>
  );
};

export default TextAreaCode;
