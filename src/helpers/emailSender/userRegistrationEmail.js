import nodemailer from 'nodemailer'

export const userRegistration = () => {
  return async (context) => {
    const userEmail = context.data.email
    const userData = context.data
    await main(userEmail, userData).catch(console.error)
    return context
  }
}

async function main(userEmail, userData) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.rcms_email_id,
      pass: process.env.rcms_email_pass
    }
  })

  const textMessage = `Hello ${userData.firstName}. Welcome to Report Card Management System. Your registered Email is ${userData.email} and your Password is ${userData.password}.`

  let info = await transporter.sendMail({
    from: process.env.email,
    to: userEmail, // Specify the recipient email address here
    subject: 'Registration at Report Card Management System.',
    text: textMessage
  })
}
