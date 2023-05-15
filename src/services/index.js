import { tests } from './tests/tests.js'

export const services = (app) => {
  app.configure(tests)

  // All services will be registered here
}
