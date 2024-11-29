import React from 'react'

const Footer = ({ currentDate }) => {
  return (
    <div>
      <p className='text-center my-8 py-4 border-t-2'>
        KOP - Automação Residencial<br />
      </p>
      <p className='text-center my-8 py-4 border-t-2'>Latest version: {currentDate}</p>
    </div>
  )
}
export default Footer
