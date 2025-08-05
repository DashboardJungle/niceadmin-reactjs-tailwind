//   Message Data
interface MessageType {
  title: string;
  avatar: any;
  subtitle: string;
  color: string;
  time: string;
}

import avatar1 from 'src/assets/images/topprojects/emily.svg';
import avatar2 from 'src/assets/images/topprojects/jason.svg';
import avatar3 from 'src/assets/images/topprojects/ryan.svg';
import avatar4 from 'src/assets/images/topprojects/olivia.svg';

const MessagesLink: MessageType[] = [
  {
    avatar: avatar2,
    color: 'bg-error',
    title: 'Michell Flintoff',
    subtitle: 'You: Yesterdy was great...',
    time: 'just now',
  },
  {
    avatar: avatar1,
    color: 'bg-primary',
    title: 'Bianca Anderson',
    subtitle: 'Nice looking dress you...',
    time: '5 mins ago',
  },
  {
    avatar: avatar3,
    color: 'bg-secondary',
    title: 'Andrew Johnson',
    subtitle: 'Sent a photo',
    time: '10 mins ago',
  },
  {
    avatar: avatar4,
    color: 'bg-warning',
    title: 'Jolly Cummins',
    subtitle: 'If I don’t like something',
    time: '5 days ago',
  },
  {
    avatar: avatar2,
    color: 'bg-success',
    title: 'Josh Macklow',
    subtitle: '$230 deducted from account',
    time: 'year ago',
  },
];

//   Notification Data
interface NotificationType {
  title: string;
  icon: any;
  subtitle: string;
  bgcolor: string;
  color: string;
  time: string;
}

const Notification: NotificationType[] = [
  {
    icon: 'solar:widget-3-line-duotone',
    bgcolor: 'bg-lightprimary dark:bg-lightprimary',
    color: 'text-primary',
    title: 'Launch Admin',
    subtitle: 'Just see the my new admin!',
    time: '9:30 AM',
  },
  {
    icon: 'solar:calendar-line-duotone',
    bgcolor: 'bg-lightwarning dark:bg-lightwarning',
    color: 'text-warning',
    title: 'Event Today',
    subtitle: 'Just a reminder that you have event',
    time: '9:15 AM',
  },
  {
    icon: 'solar:settings-line-duotone',
    bgcolor: 'bg-lighterror dark:bg-lighterror',
    color: 'text-error',
    title: 'Settings',
    subtitle: 'You can customize this template as you want',
    time: '4:36 PM',
  },
  {
    icon: 'solar:widget-4-line-duotone',
    bgcolor: 'bg-lightsuccess dark:bg-lightsuccess ',
    color: 'text-success',
    title: 'Launch Admin',
    subtitle: 'Just see the my new admin!',
    time: '9:30 AM',
  },
  {
    icon: 'solar:calendar-line-duotone',
    bgcolor: 'bg-lightinfo dark:bg-lightinfo',
    color: 'text-info',
    title: 'Event Today',
    subtitle: 'Just a reminder that you have event',
    time: '9:15 AM',
  },
  {
    icon: 'solar:settings-line-duotone',
    bgcolor: 'bg-lightprimary dark:bg-lightprimary',
    color: 'text-primary',
    title: 'Settings',
    subtitle: 'You can customize this template as you want',
    time: '4:36 PM',
  },
];

export { MessagesLink, Notification };
