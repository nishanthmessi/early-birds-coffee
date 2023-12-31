import ArrowRight from '../assets/svg/arrow-right.svg'
import Product1 from '../assets/img/product-list-1.png'
import Product2 from '../assets/img/product-list-2.png'

const AboutSection = () => {
  const features = ['fairtrade', 'Organic', 'Climate neutral']

  return (
    <>
      <div className='flex justify-center items-center h-[60px] text-[12px] lg:text-[16px] leading-[38px] space-mono gap-[10px] border-y-[1px] border-primary'>
        {features.map((feature, index) => (
          <>
            <p key={index} className='p-[10px]'>
              {feature}
            </p>
            <span className='border-r-[1px] border-primary last:border-none h-[20px]'></span>
          </>
        ))}
      </div>
      <div className='flex flex-col lg:flex-row items-center h-auto sm:h-[583px] border-b border-primary bg-secondary pt-10 sm:pt-0'>
        <div className='flex flex-col items-start sm:gap-[26px] ml-10 sm:ml-[93px] w-auto sm:w-[440px] lg:w-[860px]'>
          <p className='text-[30px] lg:text-[50px] leading-[60px] uppercase sm:w-[400px] lg:w-[782px]'>
            Our blends deliver on the promise of balance and consistency roasted
            to maximize sweetness.
          </p>
          <p className='text-[14px] lg:text-[18px] leading-[24px] space-mono w-[360px] lg:w-[705px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper.
          </p>
          <button className='flex items-center gap-[4.8px] mt-10 sm:mt-[115px]'>
            <span className='text-[16px] leading-[16px] tracking-[0.96px] uppercase'>
              view more
            </span>
            <span>
              <img src={ArrowRight} alt='' />
            </span>
          </button>
        </div>

        <div className='flex text-[25px] leading-[30px] tracking-[0.5px] sm:h-[583px]'>
          <div className='border-l border-primary px-[43px] pt-[40px] sm:pt-[80px] pb-10 sm:pb-0'>
            <img src={Product1} alt='' />
            <h1>Arabica Bekele</h1>
            <p className='text-[18px] leading-[24px] space-mono'>$44.00</p>
          </div>
          <div className='border-l border-primary px-[43px] pt-[40px] sm:pt-[80px]'>
            <img src={Product2} alt='' />
            <h1>Robusta santa</h1>
            <p className='text-[18px] leading-[24px] space-mono'>$35.00</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center h-[746px] bg-about-bg bg-no-repeat border-b border-primary'>
        <h1 className='text-[76px] sm:text-[100px] text-white leading-[110px] tracking-[-2px] uppercase text-center w-auto sm:w-[940px]'>
          More than just a coffee shop
        </h1>
      </div>
    </>
  )
}

export default AboutSection
