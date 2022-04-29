import React, { useState } from 'react';

function LoginSignUp(props) {
    const [userType, setUserType] = useState('Login');
    const [reset, setReset] = useState(false);

    const handalLogin = () => {

    }
    const handalsignUp = () => {

    }

    const handalResetpassword = () => {

    }


    return (
        <section className='contact'>
            <div className="container">
                <div className="section-title">
                    {
                        reset ? <h2>Forgot Password</h2> :
                            userType === 'Login' ? <h2>Log In</h2>
                                :
                                <h2>Sign Up</h2>
                    }
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-5 mt-lg-0">
                        <div action method="post" role="form" className="php-email-form">
                            <div className="justify-content-center row">
                                {
                                    userType === 'Login' ? null
                                        :
                                        <div className="col-md-7 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                        </div>
                                }
                                {
                                    reset ?
                                        null
                                        :
                                        <div className="col-md-7 form-group mt-3 mt-md-0">
                                            <input type="password" className="form-control" name="password" id="password" placeholder="Enter Your Password" required />
                                        </div>

                                }
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="text-center mb-5">
                                {
                                    reset ? null :
                                        userType === 'Login' ?
                                            <div className='justify-content-end'>
                                                <a href='#' onClick={() => setReset(true)}>Forgot Password ?</a>
                                            </div>
                                            :
                                            null
                                }
                            </div>
                            <div className="text-center mt-5 mb-2">
                                {
                                    reset === true ? <button className='all_btns' onClick={() => { handalResetpassword() }}>Reset Password</button> :
                                        userType === 'Login' ? <button className='all_btns' onClick={() => { handalLogin() }}>Login</button>
                                            :
                                            <button className='all_btns' onClick={() => { handalsignUp() }}>Sign Up</button>
                                }
                            </div>

                            <div className="text-center mb-5">
                                {
                                    reset === true ? 
                                        <div>
                                            <span className='me-2'>Already Have an Account?</span>
                                            <a href='#' onClick={() => {setUserType('Login'); setReset(false)}}>LogIn</a>
                                        </div> :
                                    userType === 'Login' ?
                                        <div>
                                            <span className='me-2'>Create A New Account ?</span>
                                            <a href='#' onClick={() => { setUserType('signUp'); setReset(false)}}>SignUp</a>
                                        </div>
                                        :
                                        <div>
                                            <span className='me-2'>Already Have an Account?</span>
                                            <a href='#' onClick={() => setUserType('Login')}>LogIn</a>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default LoginSignUp;