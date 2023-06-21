import nodemailer from 'nodemailer'

export const emailConfirmedPassword = () => {
  return async (context) => {
    // console.log('Context Data --->')
    // console.log(context.data)
    const userEmail = await context.data.email
    console.log('User Email --->', userEmail)
    const userData = await context.data
    console.log('User Data --->')
    console.log(userData)

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

  const textMessage = `Welcome to Report Card Management System. Your Registered Email is ${userData.email} and Your Updated Password is ${userData.newPassword}.`

  let info = await transporter.sendMail({
    from: process.env.email,
    to: userEmail, // Specify the recipient email address here
    subject: 'Password Change at Report Card Management System.',
    text: textMessage
  })
}
