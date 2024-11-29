import React from 'react'
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const ContactMe = () => {
  return (
    <div className='mx-8 px-8 relative border-indigo-800 border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
      <h3 className='absolute bg-indigo-800 text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contact me</h3>
      <p className='text-center md:text-left'>
        <a href='https://api.whatsapp.com/send?phone=5519987171833&text=Ol%C3%A1%20Victor%20Cavasso%2C%20tudo%20bem%3F' title='Whatsapp Contact' target="_blank">
          <FaWhatsapp className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://www.instagram.com/victorcavasso' title='Instagram Page' target="_blank">
          <FaInstagram className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://linkedin.com/in/victorcavasso' title='LinkedIn Profile' target="_blank">
          <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://github.com/VictorCavasso' title='GitHub Profile' target="_blank">
          <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <br />
        <span className='inline-block mt-4'>
          <a href='mailto:victorcavasso@gmail.com'>
            or drop a line: victorcavasso@gmail.com
          </a>
        </span>
      </p>
    </div>
  )
}
export default ContactMe
