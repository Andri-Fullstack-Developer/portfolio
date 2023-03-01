import React from 'react'
import './Header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

export default function HeaderSocial() {
  return (
    <div className='header__socials'>
    <a target="_" href="https://www.linkedin.com/in/4ndr1-25-2a9b86221/"  ><BsLinkedin/></a>
    <a target="_" href="https://github.com/Andricoding"><FaGithub/></a>
    <a target="_" href="https://dribbble.com/4ndr125"><FiDribbble/></a>
</div>
  )
}
