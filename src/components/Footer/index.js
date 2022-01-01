import React from 'react'
import logo from '../../assets/logo/brand-logo.png'
import facebook from '../../assets/logo/facebook.png'
import pinterest from '../../assets/logo/pinterest.png'
import instagram from '../../assets/logo/instagram.png'
import google from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="left">
          <div className="footer-logo">
            <img src={logo} alt="footer-logo" />
            <h2>MovieApp</h2>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
        </div>
        <div className="center">
          {['Tentang kami', 'Blog', 'Layanan', 'Karir', 'Pusat Media'].map((value)=>(
            <p key={Math.random()}>{value}</p>
          ))}
        </div>
        <div className="right">
          <p>Download</p>
          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <img src={google} alt="google" style={{width: 150}} />
            <img src={apple} alt="apple" style={{width: 150, marginTop: 5}} />
          </div>
          <p>Social media</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: 15
            }}
          >
            <img src={facebook} alt="facebook" style={{width: 40, marginRight: 20}}/>
            <img src={pinterest} alt="pinterest" style={{width: 40, marginRight: 20}}/>
            <img src={instagram} alt="instagram" style={{width: 40}}/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
