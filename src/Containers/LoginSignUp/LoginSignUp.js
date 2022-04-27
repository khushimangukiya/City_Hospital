import React from 'react';

function LoginSignUp(props) {
    return (
        <section className='contact'>
           <div className="container">
                <div className="section-title">
                    <h2>Sign Up</h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-5 mt-lg-0">
                        <form action method="post" role="form" className="php-email-form">
                            <div className="justify-content-center row">
                                <div className="col-md-7 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter Your Password" required />
                                </div>
                            </div>
                            <div className="text-center mt-5 mb-5"><button type="submit">Sign Up</button></div>
                        </form>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="section-title">
                    <h2>Log In</h2>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-5 mt-lg-0">
                        <form action method="post" role="form" className="php-email-form">
                            <div className="justify-content-center row">
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="password" className="form-control" name="password" id="password" placeholder="Enter Your Password" required />
                                </div>
                            </div>
                            <div className="text-center mt-5 mb-5"><button type="submit">Log In</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default LoginSignUp;