import React from 'react'
import '../styles/team.css'
import TeamName from '../components/TeamName'
import MemberCard from '../components/MemberCard'
import {webTeam} from '../utils/teamData'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

function TeamIei() {
  return (
    <div className='min-h-screen bg-[#121212] sm:px-20 xl:px-36 px-10 pb-10 pt-24'>
      <h1 className="sm:text-[16px] text-[12px] text-secondary uppercase tracking-wider">
        <span className='text-secondary'>Meet Our Team</span>
      </h1>
      <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-sans">
        Team IE<span className='text-yellow-500'>(</span>I<span className='text-yellow-500'>)</span>
      </h1>
      <section className="flex flex-col justify-center items-center py-10">
        <TeamName name="Faculty"/>
        <div className='mt-20 flex gap-10 justify-center items-center sm:flex-row w-full flex-col'>
          <img src={webTeam[0].imgUrl} className='sm:w-[40%] bg-black min-h-[50vh] rounded-sm w-[80%]'/>
          <div className='w-full min-h-[40vh] text-white flex flex-col justify-evenly items-center sm:items-start gap-6'>
            <h1 className='text-[30px] font-poppins font-medium'>Dr. Yogesh</h1>
            <h1 className='text-[18px] font-poppins font-normal text-gray-400 text-center sm:text-left'>Lead, Society IE(I) CSE Student Chapter</h1>
            <p className='text-[16px] text-center sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis est voluptates commodi possimus suscipit laboriosam accusantium, cupiditate atque quis a vitae consequuntur vel, aliquam mollitia soluta nisi! Dolore, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo necessitatibus assumenda quisquam odio error ab voluptatibus earum numquam, tempora quas cupiditate rerum in veniam eaque cum asperiores magni ipsam.</p>
            <div className='flex flex-row justify-center items-center xs:gap-4 gap-10 mt-3'>
            <a href={webTeam[0].socialLinks[0].url} target='_blank' className='cursor-pointer'>
              <FaLinkedin className='text-blue-600 text-[26px]'/>
            </a>
            <a href={webTeam[0].socialLinks[1].url} target='_blank' className='cursor-pointer'>
              {/* <FaLinkedin className='bg-blue-600'/> */}
              <FaGithub className='text-orange-600 text-[26px]'/>
            </a>
            <a href={webTeam[0].socialLinks[2].url} target='_blank' className='cursor-pointer'>
              {/* <FaLinkedin className='bg-blue-600'/> */}
              <HiOutlineMail className='text-green-300 text-[26px]'/>
            </a>
          </div>
          </div>
        </div>
        <div className='mt-20 flex gap-10 justify-center items-center sm:flex-row-reverse w-full flex-col'>
          <img src={webTeam[0].imgUrl} className='sm:w-[40%] bg-black min-h-[50vh] rounded-sm w-[80%]'/>
          <div className='w-full min-h-[40vh] text-white flex flex-col justify-evenly items-center sm:items-start gap-6'>
            <h1 className='text-[30px] font-poppins font-medium'>Dr. Yogesh</h1>
            <h1 className='text-[18px] font-poppins font-normal text-gray-400 text-center sm:text-left'>Lead, Society IE(I) CSE Student Chapter</h1>
            <p className='text-[16px] text-center sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis est voluptates commodi possimus suscipit laboriosam accusantium, cupiditate atque quis a vitae consequuntur vel, aliquam mollitia soluta nisi! Dolore, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo necessitatibus assumenda quisquam odio error ab voluptatibus earum numquam, tempora quas cupiditate rerum in veniam eaque cum asperiores magni ipsam.</p>
            <div className='flex flex-row justify-center items-center xs:gap-4 gap-10 mt-3'>
            <a href={webTeam[0].socialLinks[0].url} target='_blank' className='cursor-pointer'>
              <FaLinkedin className='text-blue-600 text-[26px]'/>
            </a>
            <a href={webTeam[0].socialLinks[1].url} target='_blank' className='cursor-pointer'>
              {/* <FaLinkedin className='bg-blue-600'/> */}
              <FaGithub className='text-orange-600 text-[26px]'/>
            </a>
            <a href={webTeam[0].socialLinks[2].url} target='_blank' className='cursor-pointer'>
              {/* <FaLinkedin className='bg-blue-600'/> */}
              <HiOutlineMail className='text-green-300 text-[26px]'/>
            </a>
          </div>
          </div>
        </div>
        <div className='mt-20 flex gap-10 justify-center items-center sm:flex-row w-full flex-col'>
          <img src={webTeam[0].imgUrl} className='sm:w-[40%] bg-black min-h-[50vh] rounded-sm w-[80%]'/>
          <div className='w-full min-h-[40vh] text-white flex flex-col justify-evenly items-center sm:items-start gap-6'>
            <h1 className='text-[30px] font-poppins font-medium'>Dr. Yogesh</h1>
            <h1 className='text-[18px] font-poppins font-normal text-gray-400 text-center sm:text-left'>Lead, Society IE(I) CSE Student Chapter</h1>
            <p className='text-[16px] text-center sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis est voluptates commodi possimus suscipit laboriosam accusantium, cupiditate atque quis a vitae consequuntur vel, aliquam mollitia soluta nisi! Dolore, error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint explicabo necessitatibus assumenda quisquam odio error ab voluptatibus earum numquam, tempora quas cupiditate rerum in veniam eaque cum asperiores magni ipsam.</p>
            <div className='flex flex-row justify-center items-center xs:gap-4 gap-10 mt-3'>
            <a href={webTeam[0].socialLinks[0].url} target='_blank' className='cursor-pointer'>
              <FaLinkedin className='text-blue-600 text-[26px]'/>
            </a>
            <a href={webTeam[0].socialLinks[1].url} target='_blank' className='cursor-pointer'>
              {/* <FaLinkedin className='bg-blue-600'/> */}
              <FaGithub className='text-orange-600 text-[26px]'/>
            </a>
            <a href={webTeam[0].socialLinks[2].url} target='_blank' className='cursor-pointer'>
              {/* <FaLinkedin className='bg-blue-600'/> */}
              <HiOutlineMail className='text-green-300 text-[26px]'/>
            </a>
          </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-10">
        <TeamName name="Web Team"/>
        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {webTeam.map((member, index) => (<MemberCard name={member.name} imgUrl={member.imgUrl} position={member.position} socialLinks={member.socialLinks} index={index} key={index}/>))}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-10">
        <TeamName name="Web Team"/>
        <div className='mt-20 flex flex-wrap gap-10 justify-center'>
          {webTeam.map((member, index) => (<MemberCard name={member.name} imgUrl={member.imgUrl} position={member.position} socialLinks={member.socialLinks} index={index} key={index}/>))}
        </div>
      </section>
    </div>
  )
}

export default TeamIei