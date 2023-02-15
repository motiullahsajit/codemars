import React from 'react'
import coverPhoto from '../../images/cover.png'
import "./hero.css"

function Hero() {
  return (
    <section style={{display: "flex", justifyContent: "center",marginTop: "6rem"}}>
        <div className='hero-container'>
        <div className='left-container'>
            <h1><span className='secondary-color'>Star Your<br/> Journey to Become<br/> a </span><span className='primary-color'>Programmer!</span></h1>
            <br/>
            <p>
            শূন্য থেকে শুরু করে (C) Programming এর basic শিখে, beginner level Problem-solving করে একজন দক্ষ প্রোগ্রামার হওয়ার যাত্রা শুর করতে চাইলে এই কোর্সে জয়েন করো |
            </p>
            <br />
            <button className='primary-button'>Enroll Now</button>
        </div>
        <div className='right-container'>
            <img src={coverPhoto}/>
        </div>
        </div>
    </section>
  )
}

export default Hero;