import React from 'react'

export default function Contact() {
    const border = {
        border:0
    }
    return (
        <>
            <section className="section contact" data-section="section6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>Let’s Keep In Touch</h2>
                            </div>
                        </div>
                        <div className="col-md-6">

                            {/* <!-- Do you need a working HTML contact-form script?
                	
                    Please visit https://templatemo.com/contact page --> */}

                            <form id="contact" action="" method="post">
                                <div className="row">
                                    <div className="col-md-6">
                                        <fieldset>
                                            <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required=""/>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <input name="email" type="text" className="form-control" id="email" placeholder="Your Email" required=""/>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="button">Send Message Now</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div id="map">
                                <iframe title='Map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d233952.11629952732!2d86.97149101879164!3d23.62219327560451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694232214813!5m2!1sen!2sin" width="100%" height="422px" style={{border}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
