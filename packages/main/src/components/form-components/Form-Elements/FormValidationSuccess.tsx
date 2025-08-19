import CardBox from '../../shared/CardBox'
import CodeDialog from '../../shared/CodeDialog'
import FormValidationsuccess from './Codes/FormValidationSuccessCode'
import FormValidationsuccessCode from './Codes/FormValidationSuccessCode.tsx?raw'

const FormValidationSuccess = () => {
  return (
    <div>
      <CardBox className='p-0'>
        <div className='p-6'>
          <h4 className='text-lg font-semibold mb-4'>
            Form validation success
          </h4>
          <FormValidationsuccess />
        </div>
        <CodeDialog>{FormValidationsuccessCode}</CodeDialog>
      </CardBox>
    </div>
  )
}

export default FormValidationSuccess
