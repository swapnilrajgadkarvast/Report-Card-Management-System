import nodemailer from 'nodemailer'

export const emailPasswordChange = () => {
  return async (context) => {
    const userEmail = context.data.email
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

  const textMessage = `Welcome to Report Card Management System. Your registered email is ${userData.email} and your temporary password is ${userData.password}.`

  let info = await transporter.sendMail({
    from: process.env.email,
    to: userEmail, // Specify the recipient email address here
    subject: 'Password Change at Report Card Management System.',
    text: textMessage
  })
}
