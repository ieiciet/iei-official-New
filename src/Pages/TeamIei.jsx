import React from 'react'
import '../styles/team.css'
import TeamName from '../components/TeamName'
import MemberCard from '../components/MemberCard'
import {webTeam} from '../utils/teamData'

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