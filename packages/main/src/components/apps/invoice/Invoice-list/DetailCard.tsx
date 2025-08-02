

import { Icon } from '@iconify/react/dist/iconify.js'

import { Progress } from 'flowbite-react'
import CardBox from 'src/components/shared/CardBox'

const DetailCard = () => {
    const RecordData = [
        {
            amount: '$2,050',
            title: 'Overdue amount',
            target: 45,
            icon: 'solar:wallet-money-line-duotone',
            txtcolor: 'warning',
            bgcolor: 'lightwarning',
        },
        {
            amount: '$4,600',
            title: 'Drafted totals',
            target: 20,
            icon: 'solar:document-line-duotone',
            txtcolor: 'info',
            bgcolor: 'lightinfo',
        },
        {
            amount: '$2,050',
            title: 'Unpaid totals',
            target: 75,
            icon: 'solar:card-recive-line-duotone',
            txtcolor: 'error',
            bgcolor: 'lighterror',
        },
        {
            amount: '7 days',
            title: 'Average paid time',
            target: 30,
            icon: 'solar:clock-circle-line-duotone',
            txtcolor: 'success',
            bgcolor: 'lightsuccess',
        },
    ]

    return (
        <>
            <div className='grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 mb-6'>
                {RecordData.map((item, i) => (
                    <CardBox key={i}>
                        <div className='flex items-start justify-between'>
                            <div className='flex flex-col justify-between gap-4'>
                                <div>
                                    <h3 className='2xl:text-28 text-2xl font-semibold'>
                                        {item.amount}
                                    </h3>
                                    <p className='2xl:text-base text-sm font-normal'>
                                        {item.title}
                                    </p>
                                </div>
                                <div>
                                    <Progress
                                        progress={item.target}
                                        color={item.txtcolor}
                                        className={`bg-${item.bgcolor} dark:bg-${item.bgcolor}`}
                                    />
                                </div>
                            </div>
                            <div
                                className={`p-3 rounded-xs bg-${item.bgcolor} text-${item.txtcolor}`}>
                                <Icon icon={item.icon} width={24} height={24} />
                            </div>
                        </div>
                    </CardBox>
                ))}
            </div>
        </>
    )
}

export default DetailCard
