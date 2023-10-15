import Shop1 from '../assets/img/shop-1.png'

const ShopSection = () => {
  return (
    <div className='flex h-[980px] bg-[#f8f8f8]'>
      {/* <div className='flex text-[50px]'>
        <div className='relative w-[380px] inline-block h-[980px]'>
          <h1 className='absolute left-0 bottom-0 border-y rotate-[270deg] -ml-[150px]'>
            Lisbon Coffee Salon
          </h1>
        </div>
        <div className='relative w-[380px] inline-block h-[980px]'>
          <h1 className='absolute left-0 bottom-0 border-y rotate-[270deg] -ml-[150px]'>
            Lisbon Coffee Salon
          </h1>
        </div>
        <div className='relative w-[380px] inline-block h-[980px]'>
          <h1 className='absolute left-0 bottom-0 border-y rotate-[270deg] -ml-[150px]'>
            Lisbon Coffee Salon
          </h1>
        </div>

        <div className='flex flex-col justify-end items-center'>
          <h1 className='border-y -rotate-90'>Berlin Coffee Roastery</h1>
        </div>
        <div className='flex flex-col justify-end items-center'>
          <h1 className='border-y -rotate-90'>Amsterdam Coffee Shop</h1>
        </div>
      </div> */}
      <div className='flex gap-[60px] h-[900px] w-[1492px] px-[60px] py-[39.5px]'>
        <img src={Shop1} alt='' className='h-[781px] w-[960px] object-cover' />
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
