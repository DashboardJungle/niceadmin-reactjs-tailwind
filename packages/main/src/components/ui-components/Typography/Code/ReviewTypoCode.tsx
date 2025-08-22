import { Blockquote, Avatar } from 'flowbite-react';
import user2 from '/src/assets/images/profile/user-2.jpg';

const ReviewTypoCode = () => {
  return (
    <>
      <figure className="mx-auto max-w-screen-md text-center">
        <svg
          className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <Blockquote className="text-2xl font-medium italic">
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting"
        </Blockquote>
        <figcaption className="mt-6 flex items-center justify-center space-x-3">
          <Avatar rounded size="xs" img={user2} alt="profile picture" />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3 font-medium">Micheal Gough</cite>
            <cite className="pl-3 text-sm">CEO at Google</cite>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default ReviewTypoCode;
