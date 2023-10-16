import CoffeeMaking from '../assets/img/latte-making.png'

const CareerSection = () => {
  return (
    <div className='flex justify-center items-center gap-[54px] h-[925px] bg-alter py-[138px] pr-[118px] border-b border-primary'>
      <img
        src={CoffeeMaking}
        alt='making-img'
        className='h-[650px] w-[1133px] rounded-[10px] object-cover'
      />
      <div className='flex flex-col items-start pl-[80px]'>
        <h1 className='text-[35px] leading-[45px] tracking-[.7px] uppercase mb-[12px]'>
          Barista Schools & Careers
        </h1>
        <p className='text-[18px] leading-[24px] space-mono w-[408px] mb-[58px]'>
          We host courses covering everything from simple home brewing
          techniques to advanced latte art to allow you to learn the essential
          life skill of how to make truly great coffee.
        </p>
        <button className='text-[17px] text-white leading-[17px] tracking-[1.36px] uppercase px-[34px] py-[22px] bg-button-bg bg-primary'>
          view more
        </button>
      </div>
    </div>
  )
}

export default CareerSection
