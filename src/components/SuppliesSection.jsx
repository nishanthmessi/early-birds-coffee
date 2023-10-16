import Supply1Img from '../assets/img/supply1.png'
import Supply2Img from '../assets/img/supply2.png'
import Supply3Img from '../assets/img/supply3.png'
import Supply4Img from '../assets/img/supply4.png'
import Supply5Img from '../assets/img/supply5.png'

const SuppliesSection = () => {
  const supplies = [Supply1Img, Supply2Img, Supply3Img, Supply4Img, Supply5Img]

  const menuList = [
    {
      id: 1,
      name: 'Caffe Latte',
      description: 'Fresh brewed coffee',
      cost: '5',
    },
    {
      id: 2,
      name: 'Cappucino',
      description: 'Espresso and milk',
      cost: '7',
    },
    {
      id: 3,
      name: 'Ice Coffee',
      description: 'Cold brewed espresso',
      cost: '4',
    },
    {
      id: 4,
      name: 'Mocha',
      description: 'Espresso, mocha sauce, milk',
      cost: '7',
    },
    {
      id: 5,
      name: 'Espresso',
      description: 'Rich espresso with milk',
      cost: '4',
    },
  ]

  return (
    <div className='flex flex-col items-start'>
      <h1 className='text-[70px] leading-[80px] tracking-[-1.4px] uppercase pl-[50px] py-[60px] border-b border-primary w-full'>
        our trusted supplies
      </h1>
      <div className='flex border-b border-primary w-full'>
        {supplies.map((supply, index) => (
          <div className='flex justify-center items-center h-[311px] w-[374px] border-r border-primary last:border-r-0'>
            <img key={index} src={supply} alt='supply-img' className='' />
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 items-center justify-items-center h-[692px] border-b border-primary'>
        <div>
          {menuList.map((menu) => (
            <div className='flex justify-between items-center mb-[27px] w-[614px]'>
              <h1 className='flex flex-col text-[20px] leading-[25px] tracking-[.8px] uppercase'>
                {menu.name} ...............
                <span className='text-[18px] leading-[24px] space-mono'>
                  {menu.description}
                </span>
              </h1>
              <p className='text-[18px] leading-[24px] space-mono'>
                {menu.cost}.00$
              </p>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-center h-full w-[952px] bg-suppy-banner bg-no-repeat border-l border-primary'>
          <p className='text-[110px] leading-[75px] tracking-[-4px] text-[#FBED81]'>
            Our coffee
          </p>
        </div>
      </div>
    </div>
  )
}

export default SuppliesSection
