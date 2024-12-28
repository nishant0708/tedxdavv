import React from 'react'

import Speakerf from '../nik-pages/Speakerf'


import FaqPage from '../../pages/questions/faqSection'
import Landing_page from '../../2025-Components/Landing_page/Landing_page'

import FrontPage2025 from '../frontpage2025design/frontpage2025'
import About from '../../2025-Components/About/About'


// import Mehnat from "../jay mc/Mehnat";

const Main = () => {
    
  return (
    <div>


        {/* <SideMarquee isRight={true}/> */}
      
       <Landing_page/>
       

    
       
      <FrontPage2025/>
  
      <About/>
       {/* <Speakerf/> */}
       <FaqPage/>
    
        
    
    </div>
  )
}

export default Main