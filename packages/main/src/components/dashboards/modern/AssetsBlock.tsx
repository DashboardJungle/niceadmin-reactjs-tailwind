
import { useContext } from 'react'
import Chart from "react-apexcharts";
import { ApexOptions } from 'apexcharts'

import { CustomizerContext } from 'src/context/CustomizerContext'
import { v4 as uuidv4 } from 'uuid'
import CardBox from '../../shared/CardBox'
import { Badge } from 'flowbite-react'


function AssetsBlock() {
    const { activeMode } = useContext(CustomizerContext)


    const options: ApexOptions = {
        chart: {
            type: 'bar',
            height: 16,
            stacked: true,
            stackType: '100%',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        colors: [
            'var(--color-primary)',
            'var(--color-warning)',
            'var(--color-secondary)',
        ],
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 3,
                borderRadiusApplication: 'around', // 'around', 'end'
                borderRadiusWhenStacked: 'all', // 'all', 'last'
            },
        },

        tooltip: {
            theme: activeMode === 'light' ? 'light' : 'dark',
            fillSeriesColor: false,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
        },
        stroke: {
            show: true,
            width: 4,
            colors: ['transparent'],
        },
    }


    const seriescolumnchart = [
        { name: 'Product Sales', data: [38] },
        { name: 'Service Revenue', data: [20] },
        { name: 'Other Income', data: [26] },
    ]

    const AllAssets = [
        {
            id: uuidv4(),
            color: 'bg-primary',
            distribution: 'Product Sales',
            value: '$211,887.42',
            percentage: '65',
        },
        {
            id: uuidv4(),
            color: 'bg-warning',
            distribution: 'Service Revenue',
            value: '$211,887.42',
            percentage: '65',
        },
        {
            id: uuidv4(),
            color: 'bg-secondary',
            distribution: 'Other Income',
            value: '$211,887.42',
            percentage: '65',
        },
    ]

    return (
        <CardBox className='h-full'>
            <div className='flex flex-col justify-between gap-5 h-full'>
                <h5 className='text-lg font-semibold'>Total Assets</h5>
                <div className='flex flex-col gap-1.5'>
                    <h3 className='text-2xl font-semibold'>$325,980.65</h3>
                    <div className='flex items-center gap-1'>
                        <Badge size='xs' color='lightsuccess'>
                            +12.8%
                        </Badge>
                        <p className='text-sm font-medium text-link dark:text-darklink'>
                            +$39,117.67
                        </p>
                        <span className='text-xs font-medium text-muted dark:text-lightgray'>
                            compared to last year
                        </span>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col gap-1.5'>
                        <p className='text-sm font-medium text-link dark:text-darklink'>
                            Distribution
                        </p>
                        <div className='h-7'>
                            <Chart
                                options={options}
                                series={seriescolumnchart}
                                type='bar'
                                height={26}
                                width={'100%'}
                            />
                        </div>
                        <div className='flex flex-col'>
                            {AllAssets.map((item) => (
                                <div
                                    key={item.id}
                                    className='py-2.5 last:border-b-0 border-b border-border dark:border-darkborder flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <span
                                            className={`w-2 h-2 rounded-full ${item.color}`}></span>
                                        <p className='text-sm font-medium text-link dark:text-darklink'>
                                            {item.distribution}
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <p className='text-sm font-normal text-link dark:text-darklink'>
                                            {item.value}
                                        </p>
                                        <span className='text-sm font-normal text-muted dark:text-darkmuted'>{`(${item.percentage}%)`}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </CardBox>
    )
}

export default AssetsBlock