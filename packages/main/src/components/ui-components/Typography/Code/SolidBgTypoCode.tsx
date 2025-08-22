import { Blockquote } from 'flowbite-react';

const SolidBgTypoCode = () => {
  return (
    <>
      <p>
        Does your user know how to exit out of screens? Can they follow your intended user journey
        and buy something from the site you’ve designed? By running a usability test, you’ll be able
        to see how users will interact with your design once it’s live.
      </p>
      <Blockquote className="my-4 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-500 dark:bg-gray-800">
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting"
      </Blockquote>
      <p>
        First of all you need to understand how Flowbite works. This library is not another
        framework. Rather, it is a set of components based on Tailwind CSS that you can just
        copy-paste from the documentation.
      </p>
    </>
  );
};

export default SolidBgTypoCode;
