import ArrowSvg from '../assets/svg/arrow-right.svg'
import Banner1 from '../assets/img/banner1.png'
import Banner2 from '../assets/img/banner2.png'
import Banner3 from '../assets/img/banner3.png'

const BlogSection = () => {
  const blogData = [
    {
      id: 1,
      title: 'Make sure your coffee is as fresh as it can be.',
      publishedOn: 'March 1, 2023',
      type: 'cortado',
      bannerUrl: Banner1,
    },
    {
      id: 2,
      title: 'The Best Coffee Advent Calendars of this year',
      publishedOn: 'May 25, 2023',
      type: 'latte',
      bannerUrl: Banner2,
    },
    {
      id: 3,
      title: 'The Most Common Way People Drink Noir Café',
      publishedOn: 'October 16, 2023',
      type: 'macchiato',
      bannerUrl: Banner3,
    },
  ]

  return (
    <div className='flex border-b border-primary'>
      <div className='flex flex-col justify-between items-start py-[65px] pl-[60px] w-[777px] border-r border-primary'>
        <h1 className='text-[70px] leading-[80px] tracking-[-1.4px] uppercase w-[484px]'>
          Recent blog posts explore
        </h1>
        <button className='text-[17px] text-white leading-[17px] tracking-[1.36px] uppercase px-[34px] py-[22px] bg-button-bg bg-primary'>
          Read all news
        </button>
      </div>
      <div className='flex flex-col'>
        {blogData.map((blog) => (
          <div className='flex gap-[44px] p-[48px] border-b border-primary last:border-b-0'>
            <img
              src={blog.bannerUrl}
              alt='banner-img'
              className='h-[295px] w-[440px] object-cover rounded-lg'
            />
            <div className='flex flex-col justify-between py-[19px]'>
              <div>
                <p className='flex items-center space-mono text-[18px] leading-[24px]'>
                  <span>{blog.publishedOn}</span> |<span>{blog.type}</span>
                </p>
                <h1 className='text-[35px] leading-[45px] tracking-[.7px] uppercase'>
                  {blog.title}
                </h1>
              </div>

              <button className='flex items-center gap-[5px] text-[16px] leading-[16px] tracking-[0.96px] uppercase'>
                view more
                <img src={ArrowSvg} alt='' />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogSection
