import FooterLogo from '../assets/img/footer-logo.png'

const FooterSection = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-10 sm:gap-[506px] items-center h-[250px] px-[70px] pt-10 sm:pt-0 border-t border-primary'>
      <div className='flex gap-10'>
        <img
          src={FooterLogo}
          alt='footer-logo'
          className='h-[102px] w-[102px]'
        />

        <h1 className='text-[30px]'>
          Early birds
          <span>
            <p className='flex flex-col text-[16px] space-mono'>
              <span>Weteringstraat 48,1017 SP</span>
              <span>Amsterdam</span>
              <span>Tel: 020-7718364</span>
            </p>
          </span>
        </h1>
      </div>
      <div className='flex gap-[80px] sm:gap-[340px] space-mono pb-10 sm:pb-10'>
        <ul>
          <li>My Account</li>
          <li>Checkout</li>
          <li>Cart</li>
          <li>Shop</li>
        </ul>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  )
}

export default FooterSection
