import React from 'react'
import './About.css'
import ME from '../../assets/4ndr1252.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Imag" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>

            <article className='about__card'>
              <FiUsers  className='about__icon'/>
              <h5>Client</h5>
              <small>200+ Wordwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Compled</small>
            </article>
          </div>

          <p>
            I am an informatics engineering student,
            who has expertise in the field of web developer 
            and network systems,
            an active and diligent student 
            who excels in the field of developer and network systems
            </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
