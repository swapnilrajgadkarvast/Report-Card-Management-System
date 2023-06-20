import nodemailer from 'nodemailer'

export const sendEmail = () => {
  return async (context) => {
    const userService = context.app.service('users')
    const userEmail = await context.data.email
    const userData = await context.data
    console.log('userdata->')
    console.log(userData)
    // console.log(`the user who just registered is ${userEmail} and data is ${JSON.stringify(userData)}`)
    await main(userEmail, userData).catch(console.error)
    return context
  }
}
;('use strict')

// async..await is not allowed in global scope, must use a wrapper
async function main(userEmail, userData) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email, //config.get('email'),
      pass: process.env.devpassword //config.get('devpassword')
    }
  })

  const textMessage = `Hello ${userData.firstName}. Welcome to Report Card Management System.Your registered email is ${userData.email} and Password is ${userData.password}.`

  let info = await transporter.sendMail({
    from: process.env.email, //config.get('email'), // sender address
    to: userEmail, // list of receivers
    subject: 'Registration at Report Card Management System.', // Subject line
    text: textMessage
  })
}
