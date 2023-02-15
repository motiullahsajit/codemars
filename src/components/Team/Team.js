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
    <h1 className='team-head primary-color'>আমরা</h1>
    <section style={{display: "flex", justifyContent: "center", marginBottom: "4rem"}}>

        <div className='teams'>
            <div className='d-flex justify-around'>
                <div className='team-card'>
                    <img src ={sajit}/>
                    <h3 className='primary-color'>Motiullah Sajit</h3>
                    <h5 className='primary-color'>(Team Lead)</h5>
                    <p>Studying Computing and Information System, Connected with programming around for 3 years now, 1 year+ professional experience in Web development.</p>
                </div>
                <div className='team-card'>
                    <img src ={tamim}/>
                    <h3 className='primary-color'>Md Tamim Hossain</h3>
                    <h5 className='primary-color'>(Course Instructor)</h5>
                    <p>Studying Computing and Information System, Connected with programming around for 3 years now, 1 year+ professional experience in Web development.</p>
                </div>
            </div>
            <div className='d-flex justify-around'>
                <div className='team-card'>
                    <img src ={anabil}/>
                    <h3 className='primary-color'>Mahmudul H. Anabil</h3>
                    <h5 className='primary-color'>(Support Instructor)</h5>
                    <p>Studying Computing and Information System, Connected with programming around for 3 years now, 1 year+ professional experience in Web development.</p>
                </div>
                <div className='team-card'>
                    <img src ={halima}/>
                    <h3 className='primary-color'>Halima Binta Habib</h3>
                    <h5 className='primary-color'>(Executive)</h5>
                    <p>Studying Computing and Information System, Connected with programming around for 3 years now, 1 year+ professional experience in Web development.</p>
                </div>
                <div className='team-card'>
                    <img src ={smaron}/>
                    <h3 className='primary-color'>Smaron Biswas</h3>
                    <h5 className='primary-color'>(Executive)</h5>
                    <p>Studying Computing and Information System, Connected with programming around for 3 years now, 1 year+ professional experience in Web development.</p>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default Team