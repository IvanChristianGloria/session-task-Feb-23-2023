import React, { Component } from 'react'

class Contact extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='container mt-3 mb-3 p-0 pt-5'>
                    <div className='row pt-3'>
                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.003826387455!2d121.02929261406013!3d14.655724189767405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6e2c5437561%3A0x86bd8c2f9ddec0b4!2sSM%20North%20EDSA%20Sky%20Dome!5e0!3m2!1sen!2sph!4v1677445673968!5m2!1sen!2sph" style={{border:'0', height: '100%', width: '100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    <h5 className='card-title'>M24J+7HQ, North Ave, Bago Bantay, Quezon City, Metro Manila</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <p className='card-text'>
                                        <h5 className='card-title'>Contact No.</h5>
                                        <p className='card-text'>
                                            912-123-1234
                                        </p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 mb-4'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>Email</h5>
                                    <p className='card-text'>
                                        user.contactUs@email.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact