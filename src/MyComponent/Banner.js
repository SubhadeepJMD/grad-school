import React from 'react';

export default function Banner() {
   const bannerVideo = {

    }
    return (
        <>
            <section className="section main-banner" id="top" data-section="section1">
                <video autoplay muted loop id="bg-video">
                    <source src="/src/images/course-video.mp4" type="video/mp4" />
                    
                </video>
                <img src="../src/images/main-slider-01" alt="" />

                <div className="video-overlay header-text">
                    <div className="caption">
                        <h6>Success starts here!</h6>
                        <h2><em>Lakshyam</em> Coaching</h2>
                        <div className="main-button">
                            <div className="scroll-to-section"><a href="#section6">Discover more</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
