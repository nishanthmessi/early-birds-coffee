import FoodImg from '../assets/img/food-img.png'

const ReserveSection = () => {
  return (
    <div className='flex h-[769px] bg-[#fdf1d9]'>
      <div className='flex flex-col justify-start gap-[233px] pl-[50px] pt-[50px] border-r border-primary w-[796px]'>
        <h1 className='text-[70px] leading-[80px] tracking-[-1.4px] uppercase w-[604px]'>
          Swing by our place we also love food
        </h1>
        <img src={FoodImg} alt='food-img' className='h-[237px] w-[315px]' />
      </div>
      <div>
        <h1>features</h1>
      </div>
    </div>
  )
}

export default ReserveSection
