import nodemailer from 'nodemailer'

export const sendEmailWithPDF = () => {
  return async (context) => {
    // console.log(context.data)
    const userService = context.app.service('student')
    const studentId = context.data.student
    // console.log("Student Id : ", studentId)
    const student = await userService.get(studentId)
    // console.log('student')
    // console.log(student)
    const userEmail = student.parent.email
    console.log('User Email : ', userEmail)
    const userData = context.data
    // console.log('User Data')
    // console.log(userData)

    console.log('User Data Pdf File Path')
    console.log(userData.reportFilePath)

    // console.log(`the user who just registered is ${userEmail} and data is ${JSON.stringify(userData)}`)
    await main(userEmail, userData, context.data.reportFilePath).catch(console.error)
    return context
  }
}
;('use strict')

async function main(userEmail, userData, pdfPath) {
  // Create a Nodemailer transporter with your email provider settings
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.devpassword
    }
  })

  // Create the email message
  let info = await transporter.sendMail({
    from: process.env.email,
    to: userEmail,
    subject: 'Report with PDF attachment from Report Card Management',
    text: 'Please find the attached report PDF file.',
    attachments: [
      {
        filename: 'report.pdf',
        path: pdfPath
      }
    ]
  })
}
