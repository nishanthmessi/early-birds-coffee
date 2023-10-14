import HeroImg from '../assets/img/hero.jpeg'
import TagImg from '../assets/img/tag.png'
import TextImg from '../assets/img/with-love.png'

const HeroSection = () => {
  return (
    <div className='flex h-[110vh] w-full'>
      <div>
        <img
          src={HeroImg}
          alt='hero-img'
          className='h-[110vh] w-[1070px] object-cover'
        />
      </div>
      <div className='flex flex-col justify-center items-start bg-hero-pattern w-[937px]'>
        <div className='ml-[140px]'>
          <img src={TagImg} alt='' className='ml-[230px]' />
          <p className='text-[120px] uppercase leading-[130px] h-[390px] w-[391px] -mt-[24px]'>
            Enjoy life sip by sip
          </p>
          <img src={TextImg} alt='' className='ml-[84px] -mt-[62px]' />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
