import React from 'react'
import Repo from './Repo'

const skills = [
  {
    id: 1,
    skill_name: 'Delphi Developer',
    skill_desc: 'DataSnap, Firedac, UniGui, DevExpress, Firemonkey',
    stars: 5
  },
  {
    id: 2,
    skill_name: 'Fullstack Developer',
    skill_desc: 'Javascript, NodeJS, ExpressJS, NextJS, ReactJS, HTML, CSS, TailwindCSS, Jest',
    stars: 2
  },
  {
    id: 3,
    skill_name: 'SQL',
    skill_desc: 'SQLServer, Firebird, PostgreSQL',
    stars: 4
  },
  {
    id: 4,
    skill_name: 'Version control',
    skill_desc: 'Subversion, Github',
    stars: 4
  },
  {
    id: 5,
    skill_name: 'Languages',
    skill_desc: 'English - Full professional proficiency',
    stars: 5
  },
  {
    id: 6,
    skill_name: 'Tester',
    skill_desc: 'TestComplete, Jest',
    stars: 3
  }
]

const Repos = () => {
  return (
    <div>
      <h3 className='mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 text-indigo-800'>Skills</h3>
      <div className='md:grid md:grid-cols-3 md:gap-2 md:my-6'>
        {skills.map(skill => {
          return (
            <Repo key={skill.id} repo={skill} />
          )
        })}
      </div>
    </div>
  )
}
export default Repos
