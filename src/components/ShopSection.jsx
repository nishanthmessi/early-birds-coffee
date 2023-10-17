import Shop1 from '../assets/img/shop-1.png'

const ShopSection = () => {
  return (
    <div className='flex items-center h-[980px] bg-[#f8f8f8]'>
      <div className='flex flex-col justify-center gap-20 w-[380px] h-[980px] pl-10'>
        <h1 className='text-[50px] border-y'>Lisbon Coffee Salon</h1>
        <h1 className='text-[50px] border-y'>Berlin Coffee Roastery</h1>
        <h1 className='text-[50px] border-y'>Amsterdam Coffee Shop</h1>
      </div>

      <div className='flex items-center gap-[60px] h-[900px] w-[1492px] px-[60px] py-[39.5px]'>
        <img
          src={Shop1}
          alt='shop-img'
          className='h-[781px] w-[960px] object-cover'
        />
        <div>
          <h1 className='text-[25px] leading-[30px] tracking-[0.5px] mb-[24px] w-[352px]'>
            Amsterdam Centre Coffee
          </h1>
          <p className='text-[18px] leading-[24px] space-mono mb-[40px]'>
            <span>Weteringstraat 48,1017,Amsterdam</span>
            <span>Tel:020-7718364</span>
            <span>Email:earlybirds@info.com</span>
          </p>
          <p className='text-[18px] leading-[24px] space-mono'>
            <span>Mon-Fri..........6.45am-3.00pm</span>
            <span>Sat-Sun.........8.30am-4.00pm</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ShopSection
