// import { emailHandler } from '../../../helpers/emailhandler.js'

export default function () {
  return (context) => {
    context.data={
      ...context.data
    }
    context.data.message='<b>Welcome,you are registered successfully at RCMS </b>'
    // emailHandler.sendEmail(context)
  }
}
