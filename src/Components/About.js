import React, { Component } from 'react'

class About extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='w-100 d-flex justify-content-center align-items-center mt-5 pt-3' style={{height:'300px', backgroundImage: 'url("https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                    <h2 className='text-white' style={{textShadow: '2px 2px 4px #000000'}}>Header Name</h2>
                </div>
                <div className='container pt-5'>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ipsum dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque vel mollis lorem, non rutrum lacus. In mi diam, iaculis eu fermentum sit amet, luctus nec augue. Curabitur lacinia, elit ac congue pretium, justo mi tristique velit, vehicula sagittis purus tellus quis nibh. Sed mollis lorem sit amet vehicula tempus. Ut sapien mauris, elementum porta erat nec, consequat dictum nunc. Suspendisse sapien eros, interdum at vulputate ac, rhoncus vel ipsum. Maecenas eleifend gravida tempor.
                    <br/>
                    <br/>
                    Pellentesque tincidunt vel leo in sollicitudin. In aliquam, turpis et porttitor iaculis, purus magna bibendum sem, quis consectetur quam felis non neque. Phasellus id libero in mi tristique scelerisque eget ut nisl. Quisque arcu libero, vestibulum nec venenatis ac, pharetra a elit. Cras eget tellus tincidunt, condimentum ex eu, lobortis ipsum. Ut nec ex lectus. In hac habitasse platea dictumst. Quisque sit amet neque quam. Phasellus fringilla est a malesuada tempus.
                </div>
            </React.Fragment>
        )
    }
}

export default About