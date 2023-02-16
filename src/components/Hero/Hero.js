import React from 'react'
import "./hero.css"

function Hero() {
  return (
    <section style={{display: "flex", justifyContent: "center",marginTop: "8rem"}}>
        <div className='hero-container'>
        <div className='left-container'>
            <h1><span className='secondary-color'>Star Your<br/> Journey to Become<br/> a </span><span className='primary-color'>Programmer!</span></h1>
            <br/>
            <p>
            শূন্য থেকে শুরু করে (C) Programming এর basic শিখে, beginner level Problem-solving করে একজন দক্ষ প্রোগ্রামার হওয়ার যাত্রা শুর করতে চাইলে এই কোর্সে জয়েন করো |
            </p>
            <br /><br />
            <a href='https://forms.gle/yK2zvZNcAtTDkMDr9' className='primary-button'>Enroll Now</a>
        </div>
        <div className='right-container'>
            <iframe height="315" src="https://www.youtube.com/embed/CMvQCoh2q9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        </div>
    </section>
  )
}

export default Hero;