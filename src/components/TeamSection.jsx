import TeamMember1 from '../assets/img/team-member-1.png'
import TeamMember2 from '../assets/img/team-member-2.png'
import TeamMember3 from '../assets/img/team-member-3.png'
import TeamMember4 from '../assets/img/team-member-4.png'
import TeamMember5 from '../assets/img/team-member-5.png'
import TeamMember6 from '../assets/img/team-member-6.png'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Uma Clark',
      role: 'Manager',
      imageUrl: TeamMember1,
    },
    {
      name: 'Tom Splinder',
      role: 'Manager',
      imageUrl: TeamMember2,
    },
    {
      name: 'Jonas Hanks',
      role: 'Pastry Chef',
      imageUrl: TeamMember3,
    },
    {
      name: 'Laura Simons',
      role: 'Media manager',
      imageUrl: TeamMember4,
    },
    {
      name: 'Ed Morris',
      role: 'Chef',
      imageUrl: TeamMember5,
    },
    {
      name: 'Rita Flams',
      role: 'Sales person',
      imageUrl: TeamMember6,
    },
  ]

  return (
    <div className='h-[620px] border-b border-primary'>
      <h1 className='text-[70px] leading-[80px] tracking-[-1.4px] uppercase pl-[50px] py-[40px] border-b border-primary'>
        Our awesome team
      </h1>
      <div className='flex px-4'>
        {teamMembers.map((teamMember) => (
          <div className='flex flex-col justify-center w-[320px] h-[458px] p-[28px] border-r border-primary last:border-r-0'>
            <img
              src={teamMember.imageUrl}
              alt='team-member'
              className='h-[304px] w-[245px] object-cover rounded-lg bg-blue-200 mb-[15px]'
            />
            <h1 className='text-[25px] leading-[30px] tracking-[.5px] uppercase'>
              {teamMember.name}
            </h1>
            <p className='text-[18px] leading-[24px] space-mono'>
              {teamMember.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamSection
