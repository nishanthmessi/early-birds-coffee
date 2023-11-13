import ReviewImg from '../assets/img/review-img.png'
import StarSvg from '../assets/svg/star.svg'

const ReviewSection = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-10 sm:gap-0 h-[878px] border-b border-primary pt-10 sm:pt-0'>
      <div className='flex flex-col justify-center items-center px-[30px] sm:px-[100px] w-auto md:w-[960px]'>
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
