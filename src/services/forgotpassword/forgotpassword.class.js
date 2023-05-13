import bcrypt from "bcrypt"
export class ForgotpasswordService{

constructor(options) {
  this.options = options
}

setup(app) {
  this.app = app
}

async create(data) {
  let result = {}
  let email = data.email
  let newPassword = data.newPassword
  let confirmedPassword = data.confirmedPassword
  let userService = this.app.service(`users`)
  let userResponse = await userService.find({
    query: {
      email: email
    }
  })
  if (userResponse && userResponse.data.length > 0) {
    let comparePassword = await bcrypt.compare(data.currentPassword, userResponse.data[0].password)
    if (comparePassword) {
      if (
        newPassword.toString() !== email.toString() &&
        newPassword.toString() !== userResponse.data[0].name
      ) {
        if (newPassword.toString() === confirmedPassword.toString()) {
          let updatePassword = await userService.patch(
            userResponse.data[0]._id,
            { password: data.newPassword },
            { new: true }
          )
          result.status = 200
          result.msg = 'Password changed successfully'
          result.record = updatePassword
          return result
        }
      }
    }
  }
}
}
export const getOptions = (app) => {
  return { app }
}

