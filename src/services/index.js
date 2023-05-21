import { forgotpassword } from './forgotpassword/forgotpassword.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(forgotpassword)

  app.configure(user)

  // All services will be registered here
}
