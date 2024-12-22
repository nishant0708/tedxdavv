import React, { lazy } from 'react'
import './Landing_page.css'
import galaxy from '../../Images/landing2025_milky.png'
import stars from '../../Images/stars.gif'
const Landing_page = () => {
  return (
    <div className='landing_2025_main'>
        <div>
            <img src={galaxy} alt='galaxy' className='galaxy2025'/>
        </div>
        <div className='landing_2025_stars'>
        <img loading={lazy} src={stars} alt='galaxy' />
</div>
    </div>
  )
}

export default Landing_page