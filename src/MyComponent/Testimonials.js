import React from 'react';

export default function Testimonials() {
    return (
        <>
            <section className="section courses" data-section="section5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Testimonials</h2>
                            </div>
                            
                        </div>
                        <div className='row'>
                            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
                            <link rel="stylesheet"
                                href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.css" />
                            <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.2.1/owl.carousel.js"></script> */}
                            <div className="owl-carousel owl-theme mt-5">
                                <div className="owl-item">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                alt="" />
                                        </div>
                                        <div className="testimonial mt-4 mb-2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit
                                            saepe quo natus aut accusantium alias blanditiis.
                                        </div>
                                        <div className="name">
                                            Denis Richie
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                                alt="" />
                                        </div>
                                        <div className="testimonial mt-4 mb-2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit
                                            saepe quo natus aut accusantium alias blanditiis.
                                        </div>
                                        <div className="name">
                                            Lisa Sthalekar
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                alt="" />
                                        </div>
                                        <div className="testimonial mt-4 mb-2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit
                                            saepe quo natus aut accusantium alias blanditiis.
                                        </div>
                                        <div className="name">
                                            Elizabith Richie
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                alt="" />
                                        </div>
                                        <div className="testimonial mt-4 mb-2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit
                                            saepe quo natus aut accusantium alias blanditiis.
                                        </div>
                                        <div className="name">
                                            Daniel Xavier
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src="https://images.pexels.com/photos/1832959/pexels-photo-1832959.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                                alt="" />
                                        </div>
                                        <div className="testimonial mt-4 mb-2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit
                                            saepe quo natus aut accusantium alias blanditiis.
                                        </div>
                                        <div className="name">
                                            Emma Watson
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-item">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src="https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                                alt="" />
                                        </div>
                                        <div className="testimonial mt-4 mb-2">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita dicta doloremque odit
                                            saepe quo natus aut accusantium alias blanditiis.
                                        </div>
                                        <div className="name">
                                            Mohammad Imran
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
