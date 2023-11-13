import React from 'react'

const ReserveSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[60px] h-[460px] bg-hero-pattern border-b border-primary'>
      <h1 className='text-[50px] leading-[60px] tracking-[1px] uppercase'>
        Reserve your table
      </h1>
      <div className='flex flex-col sm:flex-row gap-[35px]'>
        <select name='' className='w-[345px] space-mono'>
          <option value='1 person' defaultValue='1 person'>
            1 Person
          </option>
        </select>
        <select name='' className='w-[345px] space-mono'>
          <option value='21.10.22n' defaultValue='21.10.22'>
            21.10.22
          </option>
        </select>
        <select name='' className='w-[345px] space-mono'>
          <option value='11:00' defaultValue='11:00'>
            11:00
          </option>
        </select>
        <button className='text-[17px] text-white leading-[17px] tracking-[1.36px] uppercase px-[32px] py-[22px] bg-button-bg bg-primary'>
          Book a table
        </button>
      </div>
    </div>
  )
}

export default ReserveSection
