export default function () {
  return async (context) => {
    context.data = {
      ...context.data
    }
    let userName = context.data.userName

    let userService = context.app.service('users')

    let existingUser = await userService.find({
      query: {
        userName: userName
      }
    })
    //   if(existingUser)
    //   throw new Error({ message: "Username must be unique." });
    console.log('Username is===>' + existingUser.userName)
    let email = context.data.email
    let existingEmail = await userService.find({
      query: {
        email: email
      }
    })
    // if(existingEmail)
    // throw new Error({ message: "Email address must be unique." });
    console.log('Email is===>' + existingEmail.email)
  }
}
