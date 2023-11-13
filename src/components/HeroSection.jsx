import HeroImg from '../assets/img/hero.jpeg'
import TagImg from '../assets/img/tag.png'
import TextImg from '../assets/img/with-love.png'

const HeroSection = () => {
  return (
    <div className='flex flex-col lg:flex-row h-[100vh] lg:h-[110vh] w-full'>
      <div className='lg:block'>
        <img
          src={HeroImg}
          alt='hero-img'
          className='h-[60vh] lg:h-[110vh] w-auto lg:w-[1070px] object-cover'
        />
      </div>
      <div className='flex flex-col justify-center items-start bg-hero-pattern lg:w-[937px]'>
        <div className='ml-[40px] lg:ml-[140px]'>
          <img src={TagImg} alt='' className='ml-[230px] h-[100px] lg:h-auto' />
          <p className='text-[60px] lg:text-[120px] uppercase leading-[75px] lg:leading-[130px] h-[240px] lg:h-[390px] w-[335px] lg:w-[391px] lg:-mt-[24px]'>
            Enjoy life sip by sip
          </p>
          <img
            src={TextImg}
            alt=''
            className=' sm:ml-[40px] lg:ml-[84px] -mt-[140px] lg:-mt-[62px]'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
