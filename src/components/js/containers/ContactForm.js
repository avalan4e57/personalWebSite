import { connect } from 'react-redux'
import Contact from '../Contact'
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
    }
  }
}

const ContactForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact)

export default ContactForm
