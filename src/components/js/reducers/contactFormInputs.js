const contactFormInputs = (state = {
  name: '',
  email: '',
  subject: '',
  body: ''
}, action) => {
  switch (action.type) {
    case 'INPUT_NAME':
      return {
        ...state,
        name: action.text
      }
    case 'INPUT_EMAIL':
      return {
        ...state,
        email: action.text
      }
    case 'INPUT_SUBJECT':
      return {
        ...state,
        subject: action.text
      }
    case 'INPUT_BODY':
      return {
        ...state,
        body: action.text
      }
    default:
      return state
  }
}

export default contactFormInputs
