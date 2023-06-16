// import { emailHandler } from '../../../helpers/emailhandler.js'

export default function () {
  return async (context) => {
    context.data = {
      ...context.data
    }

    let email = context.email
    let userService = context.app.service(`users`)
    let userResponse = await userService.find({
      query: {
        email: email
      }
    })
    if (userResponse == null) throw new Error({ message: 'Invalid email id' })

    if (userResponse && userResponse.data.length > 0) {
      let tempoaryPassword = generatePassword()
      console.log('Temporary password is' + tempoaryPassword)

      let updatePassword = await userService.patch(
        userResponse.data[0]._id,
        { password: tempoaryPassword },
        { new: true }
      )
      context.data.message =
        '<b>Your temporary password to login RCMS is  </b>' +
        tempoaryPassword +
        '<b> USe this password to login and set new password </b>'
      // emailHandler.sendEmail(context)
      delete context.data.message
      context.data.currentPassword = tempoaryPassword
    }
  }
}
function generatePassword() {
  var length = 8,
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    retVal = ''
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
  }
  return retVal
}
