import FoodImg from '../assets/img/food-img.png'
import ArrowSvg from '../assets/svg/arrow-right.svg'

const ReserveSection = () => {
  const features = [
    {
      title: 'delivery',
      description: 'Vivamus hendrerit at sapien nec mattis. Quisque quis arcu',
    },
    {
      title: 'Wholesale',
      description: 'Pellentesque in tempor lorem, vel porttitor est.',
    },
    {
      title: 'Consistency',
      description: 'Aliquam ut arcu sodales, gravida quam vitae.',
    },
    {
      title: 'Quality',
      description: 'Nam at sapien ligula. Morbi maximus scelerisque mi sed.',
    },
  ]

  return (
    <div className='flex h-[769px] bg-secondary border-b border-primary'>
      <div className='flex flex-col justify-start gap-[233px] pl-[50px] pt-[50px] border-r border-primary w-[796px]'>
        <h1 className='text-[70px] leading-[80px] tracking-[-1.4px] uppercase w-[604px]'>
          Swing by our place we also love food
        </h1>
        <img src={FoodImg} alt='food-img' className='h-[237px] w-[315px]' />
      </div>
      <div className='flex flex-col'>
        {features.map((feature) => (
          <div className='flex justify-between py-[50px] px-[58px] w-[1123px] border-b border-primary last:border-b-0'>
            <div>
              <h1 className='text-[35px] leading-[45px] tracking-[0.7px] uppercase'>
                {feature.title}
              </h1>
              <p className='text-[18px] leading-[24px] space-mono w-[330px]'>
                {feature.description}
              </p>
            </div>

            <button className='flex items-center gap-[5px] text-[16px] leading-[16px] tracking-[0.96px] uppercase'>
              view more
              <img src={ArrowSvg} alt='' />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReserveSection
