interface Detail {
  heading: string
  desc: string
}

const Intro = ({ detail }: { detail: Detail }) => {
  const { heading, desc } = detail
  return (
    <>
      <h3 className='text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug'>
        {heading}
      </h3>
      <p className='text-xs sm:text-sm lg:text-base font-normal'>{desc}</p>
    </>
  )
}

export default Intro
