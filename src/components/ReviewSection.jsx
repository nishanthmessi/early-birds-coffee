import ReviewImg from '../assets/img/review-img.png'
import StarSvg from '../assets/svg/star.svg'

const ReviewSection = () => {
  return (
    <div className='flex h-[878px] border-b border-primary'>
      <div className='flex flex-col justify-center items-center px-[100px] w-[960px]'>
        <span className='flex gap-[3px] mb-6'>
          <img src={StarSvg} alt='' className='' />
          <img src={StarSvg} alt='' className='' />
          <img src={StarSvg} alt='' className='' />
          <img src={StarSvg} alt='' className='' />
          <img src={StarSvg} alt='' className='' />
        </span>
        <p className='text-[35px] uppercase mb-[53px]'>
          "Another reason people just can't keep away from their local coffee
          shop is the quality of coffee that's on offer."
        </p>
        <p className='text-[18px] space-mono'>Henry Monro</p>
      </div>

      <img src={ReviewImg} alt='' className='h-[878px] w-[960px]' />
    </div>
  )
}

export default ReviewSection
