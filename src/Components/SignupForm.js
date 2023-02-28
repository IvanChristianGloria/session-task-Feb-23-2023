import React, {Component} from 'react'

class SignupForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        cpassword: '',
        error: {
          nameError: '',
          emailError: '',
          password: '',
          cpassword: ''
        },
        formValid: false,
    }

    handleChange = (e) => {
        if (e.target.id == 'name')
        {
          this.validateName(e.target.value)
        }
        if (e.target.id == 'email')
        {
          this.validateEmail(e.target.value)
        }
        if (e.target.id == 'password')
        {
          this.validatePassword(e.target.value)
        }
        if (e.target.id == 'cpassword')
        {
          this.validateCPassword(e.target.value)
        }
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    validateName = (e) => {
        let formValid = this.state.formValid
        let nameError = this.state.error.nameError

        if (e.trim() === '')
        {
            nameError = 'This is required'
            formValid = false
        }
        else if (e.trim().length < 5)
        {
            nameError = 'Must contain atleast 5 characters'
            formValid = false
        }
        else
        {
            nameError = ''
            formValid = true
        }

        this.setState({
            e,
            formValid,
            error: { ...this.state.error, nameError },
        })
        return formValid
    }

    validatePassword = (e) => {
        let formValid = this.state.formValid
        let passwordError = this.state.error.passwordError
        const pattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
        let cpasswordError = this.state.error.cpasswordError

        if(e != this.state.cpassword && this.state.cpassword )
        {
            cpasswordError = 'Both passwords must be the same'
            formValid = false
        }
        else
        {
            cpasswordError = ''
            formValid = true
        }
        if (e.trim() === '')
        {
            passwordError = 'This is required'
            formValid = false
        }
        else if (!pattern.test(e))
        {
            passwordError = 'Must contain atleast one letter and one number'
            formValid = false
        }
        else if (e.trim().length < 8)
        {
            passwordError = 'Minimum of 8 characters'
            formValid = false
        }
        else
        {
            passwordError = ''
            formValid = true
        }

        this.setState({
            e,
            formValid,
            error: { ...this.state.error, passwordError, cpasswordError },
        })
        return formValid
    }

    validateCPassword = (e) => {
        let formValid = this.state.formValid
        let cpasswordError = this.state.error.cpasswordError

        if (e.trim() === '')
        {
            cpasswordError = 'This is required'
            formValid = false
        }
        else if (e != this.state.password)
        {
            cpasswordError = 'Both passwords must be the same'
            formValid = false
        }
        
        else
        {
            cpasswordError = ''
            formValid = true
        }

        this.setState({
            e,
            formValid,
            error: { ...this.state.error, cpasswordError },
        })
        return formValid
    }

    validateEmail = (e) => {
        let formValid = this.state.formValid
        let emailError = this.state.error.emailError
        const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if (e.trim() === '')
        {
            emailError = 'This is required'
            formValid = false
        }
        else if (!pattern.test(e))
        {
            emailError = 'Invalid Email Address'
            formValid = false
        }
        else
        {
            emailError = ''
            formValid = true
        }

        this.setState({
            e,
            formValid,
            error: { ...this.state.error, emailError },
        })
        return formValid
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (
            this.validateName(this.state.name) &&
            this.validateEmail(this.state.email) &&
            this.validatePassword(this.state.password) &&
            this.validateCPassword(this.state.cpassword)
        )
        {
            alert('Form is submitted')
        
            this.setState({
                name: '',
                email: '',
                password: '',
                cpassword: '',
                formValid: false,
            })
        }
    }

    render(){
        return(
            <div className="container pt-5">
                <form className="border rounded p-3 mt-5 row mt-3" onSubmit={this.handleSubmit}>
                    <h4 className="mb-3">Sign up</h4>
                    <label className="mb-1">Username</label>
                    <input id="name" className="form-control" type="text" onChange={this.handleChange} value={this.state.name}/>
                    <label className="w-100 text-danger mb-2">{this.state.error.nameError}</label>
                    <label className="mb-1">Email</label>
                    <input id="email" className="form-control" type="text" onChange={this.handleChange} value={this.state.email}/>
                    <label className="w-100 text-danger mb-2">{this.state.error.emailError}</label>
                    <label className="mb-1">Password</label>
                    <input id="password" className="form-control" type="password" onChange={this.handleChange} value={this.state.password}/>
                    <label className="w-100 text-danger mb-2">{this.state.error.passwordError}</label>
                    <label className="mb-1">Confirm Password</label>
                    <input id="cpassword" className="form-control" type="password" onChange={this.handleChange} value={this.state.cpassword}/>
                    <label className="w-100 text-danger mb-2">{this.state.error.cpasswordError}</label>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignupForm