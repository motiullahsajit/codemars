import React from 'react'
import codemars from '../../images/codemars.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css';

function Footer() {
  return (
    <section className='secondary-color-bg' id="Contact">
        
        <section className='d-flex justify-center'>
            <div className='footer-top'>
                <div className='f-top-left'>
                    <img src={codemars}/>
                    <p>teamcodemars@gmail.com</p>
                    <p>+880 1752-227406</p>
                </div>
                <div className='f-top-right'>
                <h3 className="footer-top-head primary-color">Social Media Links</h3>
                <p><FacebookIcon className='facebook m-r-1'/> <a target="_blank" href='https://www.facebook.com/codemarsteam'>Facebook Page</a></p>
                <p><FacebookIcon className='facebook m-r-1'/> <a target="_blank" href='https://www.facebook.com/groups/1215593719056089/'>Facebook Group</a></p>
                <p><LinkedInIcon className='linkedin m-r-1'/> <a target="_blank" href='https://www.facebook.com/codemarsteam'>LinkedIn</a></p>
                <p><YouTubeIcon className='youtube m-r-1'/> <a target="_blank" href='https://www.youtube.com/channel/UCW83TqGKPvLSUGRrYDdJ8Mw'>Youtube</a></p>
                </div>
            </div>
        </section>
        
        <footer className='footer-bottom'>
            <p>Copyright © 2023 team<span className='primary-color'>Codemars</span></p>
        </footer>
    </section>
  )
}

export default Footer