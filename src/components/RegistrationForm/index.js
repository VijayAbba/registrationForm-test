// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstEmpty: false,
    isLastEmpty: false,
    submitted: false,
  }

  onUpdateFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onUpdateLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onCheckFirst = event => {
    if (event.target.value === '') {
      this.setState({isFirstEmpty: true})
    } else {
      this.setState({isFirstEmpty: false})
    }
  }

  onCheckLast = event => {
    if (event.target.value === '') {
      this.setState({isLastEmpty: true})
    } else {
      this.setState({isLastEmpty: false})
    }
  }

  onSubmit = () => {
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({submitted: true, firstName: '', lastName: ''})
    }
  }

  anotherResponse = () => {
    this.setState({submitted: false, firstName: '', lastName: ''})
  }

  renderForm = () => {
    const {isFirstEmpty, isLastEmpty, firstName, lastName} = this.state

    return (
      <div className="registration-form">
        <div className="label-input-card">
          <label htmlFor="FirstName">FIRST NAME</label>
          <input
            onBlur={this.onCheckFirst}
            onChange={this.onUpdateFirstName}
            className={isFirstEmpty ? 'red-focus' : ''}
            type="text"
            value={firstName}
            placeholder="First name"
          />
          {isFirstEmpty && <p className="req-style">Required</p>}
        </div>
        <div className="label-input-card">
          <label htmlFor="LastName">LAST NAME</label>
          <input
            onBlur={this.onCheckLast}
            onChange={this.onUpdateLastName}
            className={isLastEmpty ? 'red-focus' : ''}
            value={lastName}
            type="text"
            placeholder="Last name"
          />
          {isLastEmpty && <p className="req-style">Required</p>}
        </div>
        <button onClick={this.onSubmit} className="" type="submit">
          Submit
        </button>
      </div>
    )
  }

  renderSubmitted = () => (
    <div className="">
      <img
        className=""
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="">Submitted Successfully</p>
      <button onClick={this.anotherResponse} type="button">
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {submitted} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        {submitted ? this.renderSubmitted() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
