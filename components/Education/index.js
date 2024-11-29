import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Technologist degree',
    subject: 'Analysis and Systems Development',
    institution: 'UNIP - Universidade Paulista'
  },
  {
    degree: 'Technical high school',
    subject: 'Information Technology',
    institution: "Sant'anna International School"
  },
  {
    degree: 'Fullstack Developer',
    subject: 'Computer programming, specific applications',
    institution: "DevPleno"
  },
  {
    degree: 'English as a second language',
    subject: 'General English and Cambridge Test',
    institution: "ILAC - Toronto"
  }
]

const Education = () => {
  return (
    <div>
      <h3 className='text-4xl font-bold text-center uppercase mt-10 mb-5 text-indigo-800'>My Education</h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg'>
        {degrees.map((degree, i) => (
          <EducationItem key={'i' + i} degree={degree} />
        ))}
      </div>
    </div>
  )
}
export default Education
