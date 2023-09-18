import React from 'react'

export default function Presentation() {
    return (
        <>
            <section className="section video" data-section="section5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <div className="left-content">
                                <span>our presentation is for you</span>
                                <h4>Watch the video to learn more <em>about Lakshyam Coaching</em></h4>
                                <p>Welcome to Lakshyam Coaching, the premier institute dedicated to shaping the future of aspiring students in their journey towards success in competitive exams.
                                    <br/><br/>At Lakshyam Coaching, we specialize in providing comprehensive coaching and guidance for various entrance examinations, including JEE Mains & Advance, NEET, Olympiads etc.</p>
                                        {/* <!-- <div className="main-button"><a rel="nofollow" href="https://fb.com/templatemo" target="_parent">External URL</a></div> --> */}
                                    </div>
                            </div>
                            <div className="col-md-6">
                                <article className="video-item">

                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yfzRTs662aQ?si=T-InNIfhCuIitkRW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </article>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
