import Logo from '../assets/img/logo-black-1.png'
import NavFrame from '../assets/img/nav-frame.svg'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-[100vw] flex justify-between items-center h-[100px] pl-[40px] pr-[20px] space-mono font-[400] border-b-[1px] border-[#1D1D1B] text-primary bg-white z-10'>
      <div className='flex gap-[47.65px]'>
        <button>Home</button>
        <button>Pages</button>
        <button>Shop</button>
        <button>Blog</button>
      </div>
      <img src={Logo} alt='' className='h-[37px] w-[165px]' />
      <div className='flex gap-[23px]'>
        <button>cart(0)</button>
        <button className='mr-[20px]'>search</button>
        <div className='border-l-[1px] border-[#1D1D1B] px-[23px] h-[100px] py-[21px]'>
          <img src={NavFrame} alt='icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
