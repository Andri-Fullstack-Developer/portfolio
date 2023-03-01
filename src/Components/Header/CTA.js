import React from 'react'
import './Header.css'

export default function CTA() {
  return (
    <div className='cta'>
        <a href={require('../../assets/Doc/MY CV Andri Doc..pdf')} className='btn' download>Download CV</a>
        <a href="#contact" className='btn btn-primary' >Lat's Talk</a>
    </div>
  )
}
