import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import AboutIntro from '../components/AboutIntro'
import ServiceIntro from '../components/ServiceIntro'
import '../components/ServiceIntro.css' 
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

import pan from "../assets/pan-card-sample.webp"
import caste from "../assets/caste-certificate.jpeg"
import udyami from "../assets/udyami-registration-sample.png"
import pdf from "../assets/pdf-editor-sample.png"
import service from "../assets/into-img.jpeg"



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
            <ServiceIntro img={pan}  title="PAN Card" whatsappNumber={7485875137}/>
            <ServiceIntro img={pdf}  title="PDF Editor" whatsappNumber={7485875137}/>
            <ServiceIntro img={udyami}  title="Udyami Registration" whatsappNumber={7485875137}/>
            <ServiceIntro img={caste}  title="Caste Certificate" whatsappNumber={7485875137}/>
          </div>
          <div className='service-container'  style={{marginTop:"3em", gap:"14em"}}>
            <img src={service} className='service-img2'/>
            <Link to="/service"  className='more-button'> For more service</Link>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home
