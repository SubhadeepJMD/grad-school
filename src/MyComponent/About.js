import React from 'react'

export default function About() {
  return (
    <>
      <section className="section why-us" data-section="section2">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Why choose Grad School?</h2>
          </div>
        </div>
        <div className="col-md-12">
          <div id='tabs'>
            <ul>
              <li><a href='#tabs-1'>Best Education</a></li>
              <li><a href='#tabs-2'>Expert Faculty</a></li>
              <li><a href='#tabs-3'>Personalized Attention</a></li>
            </ul>
            <section className='tabs-content'>
              <article id='tabs-1'>
                <div className="row">
                  <div className="col-md-6">
                    <img src="assets/images/choose-us-image-01.png" alt=""/>
                  </div>
                  <div className="col-md-6">
                    <h4>Best Education</h4>
                    <p>Welcome to Lakshyam Coaching, the premier institute dedicated to shaping the future of aspiring students in their journey towards success in competitive exams.

                    At Lakshyam Coaching, we specialize in providing comprehensive coaching and guidance for various entrance examinations, including JEE Mains & Advance, NEET, Olympiads etc.</p>
                  </div>
                </div>
              </article>
              <article id='tabs-2'>
                <div className="row">
                  <div className="col-md-6">
                    <img src="assets/images/choose-us-image-02.png" alt=""/>
                  </div>
                  <div className="col-md-6">
                    <h4>Expert Faculty</h4>
                    <p>We have a team of young, highly qualified and experienced faculty members who are experts in their respective domains. Our faculty members possess a deep understanding of the subjects they teach and employ effective teaching methodologies to ensure conceptual clarity and application-based learning.</p> 
                    
                  </div>
                </div>
              </article>
              <article id='tabs-3'>
                <div className="row">
                  <div className="col-md-6">
                    <img src="assets/images/choose-us-image-03.png" alt=""/>
                  </div>
                  <div className="col-md-6">
                    <h4>Personalized Attention</h4>
                    <p>We understand that each student has unique strengths and weaknesses. Therefore, we emphasize personalized attention and provide individual support to help students overcome their challenges. Our faculty members are always available to address students' queries, provide guidance, and offer extra assistance whenever required.</p>
                  </div>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
