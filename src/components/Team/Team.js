import React from 'react'
import "./Team.css"
import sajit from "../../images/sajit.png";
import tamim from "../../images/tamim.png";
import anabil from "../../images/anabil.png";
import halima from "../../images/halima.png";
import smaron from "../../images/smaron.jpg";


function Team() {
  return (
    <>
    <h1 className='team-head primary-color' id="About Us">আমরা</h1>
    <section style={{display: "flex", justifyContent: "center", marginBottom: "4rem"}} >

        <div className='teams'>
            <div>
                <div className='team-card-container'>
                    <div className='team-card'>
                        <img src ={sajit}/>
                        <a href='https://www.linkedin.com/in/motiullah-sajit/' target="_blank" ><h3 className='primary-color'>Motiullah Sajit</h3></a>
                        <h5 className='primary-color'>(Team Lead)</h5>
                        <p>Studying Computing and Information System, Connected with programming around for 3 years now, 1 year+ professional experience in Web development</p>
                    </div>
                    <div className='team-card'>
                        <img src ={tamim}/>
                        <a href='https://www.linkedin.com/in/md-tamim-hossain-61a092208/' target="_blank" ><h3 className='primary-color'>Md Tamim Hossain</h3></a>
                        <h5 className='primary-color'>(Course Instructor)</h5>
                        <p>Studying Computing and Information System, Connected with programming around for 5 years now, 1 year experience in Teaching, Experienced in Competitive Programming, CyberSecurity and Back-end development</p>
                    </div>
                </div>
                <div className='team-card-container'>
                    <div className='team-card'>
                        <img src ={anabil}/>
                        <a href='https://www.linkedin.com/in/mahmudulhasananabil/' target="_blank" ><h3 className='primary-color'>Mahmudul H. Anabil</h3></a>
                        <h5 className='primary-color'>(Support Instructor)</h5>
                        <p>Studying Computing and Information System, Connected with programming around for 2 years now, experienced in Web development.</p>
                    </div>
                    <div className='team-card'>
                        <img src ={halima}/>
                        <a href='https://www.facebook.com/halimabinta.habib.7' target="_blank" ><h3 className='primary-color'>Halima Binta Habib</h3></a>
                        <h5 className='primary-color'>(Executive)</h5>
                        <p>Studying Software Engineering, Connected with programming around for 1 years now, Expert in SEO, Content Writing, Social Media management</p>
                    </div>
                    <div className='team-card'>
                        <img src ={smaron}/>
                        <a href='https://www.facebook.com/profile.php?id=100011547033268' target="_blank" ><h3 className='primary-color'>Smaron Biswas</h3></a>
                        <h5 className='primary-color'>(Executive)</h5>
                        <p>Studying Computing and Information System, Connected with programming around for 4 years now, Experienced in Competitive Programming, Back-end development</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Team