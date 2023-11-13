import FollowBanner1 from '../assets/img/follow-banner1.png'
import FollowBanner2 from '../assets/img/follow-banner2.png'
import FollowBanner3 from '../assets/img/follow-banner3.png'
import FollowBanner4 from '../assets/img/follow-banner4.png'
import FollowBanner5 from '../assets/img/follow-banner5.png'
import FollowBanner6 from '../assets/img/follow-banner6.png'
import FollowBanner7 from '../assets/img/follow-banner7.png'
import FollowBanner8 from '../assets/img/follow-banner8.png'
import FollowBanner9 from '../assets/img/follow-banner9.png'
import FollowBanner10 from '../assets/img/follow-banner10.png'

const FollowSection = () => {
  const followBanners = [
    FollowBanner1,
    FollowBanner2,
    FollowBanner3,
    FollowBanner4,
    FollowBanner5,
    FollowBanner6,
    FollowBanner7,
    FollowBanner8,
    FollowBanner9,
    FollowBanner10,
  ]

  return (
    <div className='flex flex-col w-auto'>
      <h1 className='text-[70px] leading-[80px] tracking-[-1.4px] py-[34px] border-b border-primary pl-[50px]'>
        Follow us for more
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-5 gap-[24px] p-[40px]'>
        {followBanners.map((banner) => (
          <img
            src={banner}
            alt=''
            className='w-[348px] h-[348px] rounded-[10px] object-cover'
          />
        ))}
      </div>
    </div>
  )
}

export default FollowSection
