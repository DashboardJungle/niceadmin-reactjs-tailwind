
import { Icon } from '@iconify/react/dist/iconify.js'

const InfoBadge = ({
  icon = 'solar:window-frame-linear',
  text = '5 Demo Variations',
}) => {
  return (
    <div className='w-fit px-3 py-1.5 flex items-center gap-2 rounded-lg bg-white dark:bg-black border border-forest-black/10 dark:border-white/15'>
      <Icon icon={icon} width={18} height={18} />
      <p className='text-forest-black dark:text-darklink text-base'>{text}</p>
    </div>
  )
}

export default InfoBadge
