// import { emailHandler } from '../../../helpers/emailhandler.js'

// export default function () {
//   return async (context) => {
//     context.data = {
//       ...context.data
//     }

//     let email = context.email
//     let userService = context.app.service(`users`)
//     let userResponse = await userService.find({
//       query: {
//         email: email
//       }
//     })
//     if (userResponse == null) throw new Error({ message: 'Invalid email id' })

//     if (userResponse && userResponse.data.length > 0) {
//       let tempoaryPassword = generatePassword()
//       console.log('Temporary password is' + tempoaryPassword)

//       let updatePassword = await userService.patch(
//         userResponse.data[0]._id,
//         { password: tempoaryPassword },
//         { new: true }
//       )
//       context.data.message =
//         '<b>Your temporary password to login RCMS is  </b>' +
//         tempoaryPassword +
//         '<b> USe this password to login and set new password </b>'
//       // emailHandler.sendEmail(context)
//       delete context.data.message
//       context.data.currentPassword = tempoaryPassword
//     }
//   }
// }
// function generatePassword() {
//   var length = 8,
//     charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
//     retVal = ''
//   for (var i = 0, n = charset.length; i < length; ++i) {
//     retVal += charset.charAt(Math.floor(Math.random() * n))
//   }
//   return retVal
// }

// import nodemailer from 'nodemailer'
// import config from 'config'

// export const sendChangePasswordEmail = (options) => async (context) => {
//   const { email, temporaryPassword, newPassword, confirmPassword } = context.data

//   if (email && temporaryPassword && newPassword && confirmPassword) {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: config.get('email'),
//         pass: config.get('devpassword')
//       }
//     })

//     const textMessage = `Your Registered Email is ${context.data.email} and Your Updated Password is ${context.data.newPassword}.`

//     const mail = {
//       from: config.get('email'),
//       to: context.data.email,
//       subject: 'Your password has been changed !',
//       text: textMessage //`Your password has been changed. Your new password is: ${newPassword}`,
//     }

//     await transporter.sendMail(mail)
//   }

//   return context
// }

import nodemailer from 'nodemailer'

export const emailConfirmedPassword = () => {
  return async (context) => {
    const userEmail = context.emsil
    const userData = context.data

    console.log('User Data')
    console.log(userData)

    console.log('userEmail')
    console.log(userEmail)

    await main(userEmail, userData).catch(console.error)

    return context
  }
}

async function main(userEmail, userData) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.devpassword
    }
  })

  const textMessage = `Welcome to Report Card Management System. Your Registered Email is ${context.data.email} and Your Updated Password is ${context.data.newPassword}.`

  let info = await transporter.sendMail({
    from: process.env.email,
    to: userEmail, // Specify the recipient email address here
    subject: 'Password Change at Report Card Management System.',
    text: textMessage
  })
}
