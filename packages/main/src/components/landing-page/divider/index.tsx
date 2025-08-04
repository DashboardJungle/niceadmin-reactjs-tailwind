import img1 from 'src/assets/images/landingpage/divider/divider-logo-white.svg'
import img2 from 'src/assets/images/landingpage/divider/divider-logo.svg'



const Divider = () => {
  return (
    <section className='py-2 landingpage'>
      <div className='container'>
        <div className='max-w-xl mx-auto flex items-center justify-center gap-4'>
          <div className='flex-1 h-px bg-forest-black/10 dark:bg-white/10'></div>

          <div className='px-2.5 py-1 border border-forest-black/10 dark:border-white/10 rounded-lg'>
            <div>
              <img
                src={img2}
                alt='divider-icon'
                width={16}
                height={16}
                className='dark:hidden block'
              />
              <img
                src={img1}
                alt='divider-icon'
                width={16}
                height={16}
                className='hidden dark:block'
              />
            </div>
          </div>

          <div className='flex-1 h-px bg-forest-black/10 dark:bg-white/10'></div>
        </div>
      </div>
    </section>
  )
}

export default Divider
