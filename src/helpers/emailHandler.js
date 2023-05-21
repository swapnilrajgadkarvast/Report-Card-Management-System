import nodemailer from 'nodemailer'
export const emailHandler = {
  sendEmail: async function (context) {
    console.log('hello')
    const user = process.env.rcms_email_id
    const pass = process.env.rcms_email_pass
        
  context.data={
    ...context.data
  }
   
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass
      }
    })
    try {
      const info = await transporter.sendMail({
        from: 'kshamakhamkar@gmail.com', // sender address
        to: context.data.email, // list of receivers
        subject: "Registration at RCMS", // Subject line
       // text: `Welcome,you are registered successfully and your password is ${context.data.password}`, // plain text body
        html: context.data.message // html body

      })
      console.log('Message sent: %s', info.messageId)
    } catch (err) {
      console.log('here')
      console.log(err)
    }
  }
}
