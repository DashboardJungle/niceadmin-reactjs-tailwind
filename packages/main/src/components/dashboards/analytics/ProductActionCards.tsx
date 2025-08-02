import { v4 as uuidv4 } from 'uuid'
import ProductCard from './ProductCard'

export default function ProductActionCards() {
  const ProductsData = [
    {
      id: uuidv4(),
      title: 'Visitor',
      amount: '126,426',
      growthPercentage: '+1.2%',
      badgeColor: 'lightsuccess',
      icon: 'solar:users-group-rounded-line-duotone',
      iconBg: 'bg-lightsuccess text-success',
    },
    {
      id: uuidv4(),
      title: 'Conversion rate',
      amount: '5.3%',
      growthPercentage: '-1.5%',
      badgeColor: 'lighterror',
      icon: 'solar:chart-square-line-duotone',
      iconBg: 'bg-lightwarning text-warning',
    },
    {
      id: uuidv4(),
      title: 'Ad campaign clicks',
      amount: '11,510',
      growthPercentage: '+1.9%',
      badgeColor: 'lightsuccess',
      icon: 'solar:box-line-duotone',
      iconBg: 'bg-lightinfo text-info',
    },
  ]
  return (
    <div className='grid grid-cols-12 gap-6'>
      {ProductsData.map((product) => (
        <div className='lg:col-span-4 col-span-12' key={product.id}>
          <ProductCard
            title={product.title}
            amount={product.amount}
            growthPercentage={product.growthPercentage}
            badgeColor={product.badgeColor}
            icon={product.icon}
            iconBg={product.iconBg}
          />
        </div>
      ))}
    </div>
  )
}
