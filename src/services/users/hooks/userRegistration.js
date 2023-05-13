import { emailHandler } from '../../../helpers/emailhandler.js'

export default function () {
  return (context) => {
    emailHandler.sendEmail(context)
  }
}
