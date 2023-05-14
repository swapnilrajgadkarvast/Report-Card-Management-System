import { student } from './student/student.js'

export const services = (app) => {
  app.configure(student)

  // All services will be registered here
}
