import React from 'react'
import "./Promo.css"

function Promo() {
  return (
    <section style={{display: "flex", justifyContent: "center",marginTop: "6rem"}}>
        <div className='course-info-banner'>
            <h1 className='primary-color'>তুমি রেডি তো...?</h1>
            <br/>
            <p style={{width: "65%"}}className='secondary-color'>একজন দক্ষ প্রোগ্রামার হওয়ার যাত্রা শুরু করতে চাইলে এই কোর্সে জয়েন করো| শিখতে গেলে যা যা লাগবে সেগুলো প্রোভাইড করব আমরা
            তোমার শুধু লেগে থাকতে হবে, হার্ড ওয়ার্ক করতে হবে।</p>
            <br/>
            <a href='https://forms.gle/yK2zvZNcAtTDkMDr9' className='primary-button'>Enroll Now</a>
        </div>
    </section>
  )
}

export default Promo