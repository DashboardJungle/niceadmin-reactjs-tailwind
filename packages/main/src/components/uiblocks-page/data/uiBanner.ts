import greetingbanner from '/src/assets/images/uiblocks/greeting-banner.webp';
import transactionbanner from '/src/assets/images/uiblocks/track-transaction-banner.webp';
import notificationbanner from '/src/assets/images/uiblocks/notification-banner.webp';
import errorbanner from '/src/assets/images/uiblocks/error-banner.webp';
import emptybanner from '/src/assets/images/uiblocks/empty-banner.webp';
import mutualfriendbanner from '/src/assets/images/uiblocks/mutual-friend-banner.webp';

const bannerUiBlock = [
  {
    img: greetingbanner,
    name: 'Greeting Banner',
    href: '/ui-blocks/banner/#greeting',
    scale: 'scale-none',
  },
  {
    img: transactionbanner,
    name: 'Track Transaction Banner',
    href: '/ui-blocks/banner/#trackTransaction',
    scale: 'scale-none',
  },
  {
    img: notificationbanner,
    name: 'Notification Banner',
    href: '/ui-blocks/banner/#notification',
    scale: 'scale-70',
  },
  {
    img: errorbanner,
    name: 'Error Banner',
    href: '/ui-blocks/banner/#error',
    scale: 'scale-70',
  },
  {
    img: emptybanner,
    name: 'Empty Banner',
    href: '/ui-blocks/banner/#empty',
    scale: 'scale-70',
  },
  {
    img: mutualfriendbanner,
    name: 'Mutual Friend Banner',
    href: '/ui-blocks/banner/#mutualFriend',
    scale: 'scale-70',
  },
];

export default bannerUiBlock;
