import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { employeeList } from '../Assets/Services/api'

class Home extends Component {
    state = {
        emp: []
    }

    componentDidMount = () => {
        axios.get(employeeList).then((e) => {
            console.log(e);
            this.setState({
                emp: e.data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }


    render() {
        const emp_list = this.state.emp
        const home_display = emp_list.length ?
            emp_list.map(({ id, firstName, lastName, imageUrl, email, contactNumber }) =>
            <React.Fragment>
                <div className='col-3 mb-4' key={id}>
                    <div className='card'>
                        <img src={imageUrl} className='card-img-top' alt='...'/>
                            <div className='card-body'>
                                <h5 className='card-title'>{firstName} {lastName}</h5>
                                <p className='card-text'>
                                    {contactNumber} <br/>
                                    {email} 
                                </p>
                            </div>
                    </div>
                </div>
            </React.Fragment>
            ) : 
            <div className='h-100 w-100 d-flex justify-content-center align-items-center'>
                <div className='spinner-border text-primary' role='status' style={{height:'50px', width:'50px'}}>
                    <span className='visually-hidden'>Loading...</span>
                </div>
            </div>

        return (
            <React.Fragment>
                <div className='container mt-3 mb-3 p-0 pt-5'>
                    <div className='row pt-3'>
                        {home_display}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home