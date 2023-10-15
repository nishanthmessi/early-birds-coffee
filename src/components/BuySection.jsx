import Product1 from '../assets/img/product1.png'
import Product2 from '../assets/img/product2.png'
import Product3 from '../assets/img/product3.png'
import Product4 from '../assets/img/product4.png'

const BuySection = () => {
  const productData = [
    {
      productName: 'French Roast',
      cost: 37,
      img: Product1,
      status: null,
    },
    {
      productName: 'Decaf espresso',
      cost: 41,
      img: Product2,
      status: 'new',
    },
    {
      productName: 'Costa Rica',
      cost: 30,
      img: Product3,
      status: null,
    },
    {
      productName: 'Decaf French Roast',
      cost: 45,
      img: Product4,
      status: 'sold',
    },
  ]

  return (
    <div className='h-[750px]'>
      <h1 className='text-[70px] leading-[80px] tracking-[-1.4px] uppercase py-[40px] pl-[50px] border-y border-primary'>
        The coffee that's right for you
      </h1>
      <div className='flex border-b border-primary'>
        {productData.map((product) => (
          <div className='h-[582.5px] w-[478.75px] px-[42px] py-[40px] border-r border-primary'>
            <div className='w-[67px]'>
              <p className='text-[18px] leading-[18px] tracking-[0.18px] uppercase bg-yellow-400 px-[18px] py-[4px]'>
                {product.status === null ? '' : product.status}
              </p>
            </div>

            <img src={product.img} alt='' className='h-[410px] w-[394px]' />
            <h1 className='text-[25px] leading-[30px] tracking-[.5px] uppercase'>
              {product.productName}
            </h1>
            <p className='space-mono'>${product.cost}.00</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuySection
