import { Avatar } from 'flowbite-react'
import img1 from 'src/assets/images/profile/user-2.jpg'
import img2 from 'src/assets/images/profile/user-1.jpg'


const ImageOverrideCode = () => {
  return (
    <div>
      <div className='flex flex-wrap gap-2'>
        <Avatar
          img={(props) => (
            <img
              alt=''
              height='48'
              referrerPolicy='no-referrer'
              src={img1}
              width='48'
              {...props}
            />
          )}
        />
        <Avatar
          img={(props) => (
            <picture>
              <source
                media='(min-width: 900px)'
                srcSet={img1}
              />
              <source
                media='(min-width: 480px)'
                srcSet={img2}
              />
              <img
                alt=''
                height='48'
                src={img2}
                width='48'
                {...props}
              />
            </picture>
          )}
        />
      </div>
    </div>
  )
}

export default ImageOverrideCode
