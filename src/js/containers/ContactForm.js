import { connect } from 'react-redux'
import Contact from '../components/Contact'
import {
  updateName,
  updateEmail,
  updateSubject,
  updateBody
} from '../actions'

const mapStateToProps = state => {
  return {
    formInputName: state.contactFormInputs.name,
    formInputEmail: state.contactFormInputs.email,
    formInputSubject: state.contactFormInputs.subject,
    formInputBody: state.contactFormInputs.body
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onNameInput: (e) => {
      e.preventDefault()
      dispatch(updateName(e.target.value))
    },
    onEmailInput: (e) => {
      e.preventDefault()
      dispatch(updateEmail(e.target.value))
    },
    onSubjectInput: (e) => {
      e.preventDefault()
      dispatch(updateSubject(e.target.value))
    },
    onBodyInput: (e) => {
      e.preventDefault()
      dispatch(updateBody(e.target.value))
    },
    onFormSubmit: (name, email, subject, body) => {
      let url = 'http://localhost:3000/'
      let data = {
        name: name,
        email: email,
        subject: subject,
        body: body
      }
      // console.log(data)
      // let server = JSON.stringify(data)
      // console.log(server)
      fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    }
  }
}

const ContactForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)

export default ContactForm
