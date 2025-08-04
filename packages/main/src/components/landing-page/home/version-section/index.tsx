import { version } from "../../data/version"



const VersionSection = () => {
  return (
    <section className='landingpage'>
      <div className='py-11 xl:py-20'>
        <div className='container'>
          <div className='scrollbar-hide'>
            <div className='bg-white dark:bg-black grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 border border-forest-black/10 rounded-10 shadow-grid-shadow'>
              {version?.map((value, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-start xl:justify-center gap-4 py-3 xl:py-5 px-5 ${index !== version.length - 1
                      ? 'border-r border-forest-black/10 dark:border-white/10'
                      : ''
                      }`}>
                    <img
                      src={value?.icon}
                      alt='image'
                      width={32}
                      height={32}
                      className={
                        value.tech === 'SWR' ? 'dark:hidden block' : ''
                      }
                    />
                    {value?.darkicon && (
                      <img
                        src={value?.darkicon}
                        alt='image'
                        width={32}
                        height={32}
                        className='dark:block hidden'
                      />
                    )}
                    <div>
                      <p className='text-forest-black dark:text-darklink font-medium text-base'>
                        {value?.version}
                      </p>
                      <p className='text-base font-normal text-forest-black/60 dark:text-darkmuted'>
                        {value?.tech}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VersionSection
