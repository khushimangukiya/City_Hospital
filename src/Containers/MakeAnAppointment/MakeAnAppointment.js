import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

function MakeAnAppointment(props) {
    return (
        <section id="appoiment" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Make An Appointment</h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-5 mt-lg-0">
                        <form action method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="number" className="form-control" name="number" id="number" placeholder="Your Phone Number" required />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-group mt-3 col-md-4">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <FormGroup className='col-md-4 mt-3 select_dropdown'>
                                    <Input id="exampleSelect" name="select" type="select">
                                    <option selected>Select Departments</option>
                                        <option>
                                        Departments 1
                                        </option>
                                        <option>
                                        Departments 2
                                        </option>
                                        <option>
                                        Departments 3
                                        </option>
                                        <option>
                                        Departments 4
                                        </option>
                                        <option>
                                        Departments 5
                                        </option>
                                    </Input>
                                </FormGroup>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MakeAnAppointment;