import Supply1Img from '../assets/img/supply1.png'
import Supply2Img from '../assets/img/supply2.png'
import Supply3Img from '../assets/img/supply3.png'
import Supply4Img from '../assets/img/supply4.png'
import Supply5Img from '../assets/img/supply5.png'

const SuppliesSection = () => {
  const supplies = [Supply1Img, Supply2Img, Supply3Img, Supply4Img, Supply5Img]

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
    </div>
  )
}

export default SuppliesSection
