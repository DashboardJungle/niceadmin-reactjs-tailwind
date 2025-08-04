

import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import WithIcon from './Code/WithIconCode'
import WithIconCode from './Code/WithIconCode.tsx?raw'

const PaginationWithIcon = () => {
  return (
    <div>
      <CardBox className='p-0'>
        <div>
          <div className='p-6'>
            <h4 className='text-lg font-semibold mb-4'>
              Pagination With Icons
            </h4>
            <WithIcon />
          </div>
          <CodeDialog>{WithIconCode}</CodeDialog>
        </div>
      </CardBox>
    </div>
  )
}

export default PaginationWithIcon
