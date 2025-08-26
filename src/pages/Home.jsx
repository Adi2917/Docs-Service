import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import AboutIntro from '../components/AboutIntro'
import ServiceIntro from '../components/ServiceIntro'
import '../components/ServiceIntro.css' 
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Intro />
        <center><AboutIntro /></center>
        <div>
          <div className='service-heading'>
            <h1><u>Our</u></h1>
            <h2 style={{marginTop:"1.3em", marginLeft:"10px"}}>Service</h2>
          </div>
          <div className='service-container'>
            <ServiceIntro img="src/assets/pan-card-sample.webp"  title="PAN Card" whatsappNumber={7485875137}/>
            <ServiceIntro img="src/assets/pdf-editor-sample.png"  title="PDF Editor" whatsappNumber={7485875137}/>
            <ServiceIntro img="src/assets/udyami-registration-sample.png"  title="Udyami Registration" whatsappNumber={7485875137}/>
            <ServiceIntro img="src/assets/caste-certificate.jpeg"  title="Caste Certificate" whatsappNumber={7485875137}/>
          </div>
          <div className='service-container'  style={{marginTop:"3em", gap:"14em"}}>
            <img src="src/assets/into-img.jpeg" className='service-img2'/>
            <Link to="/service"  className='more-button'> For more service</Link>
          </div>
        </div>
    </div>
  )
}

export default Home
