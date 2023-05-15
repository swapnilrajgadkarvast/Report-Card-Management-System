import { studentTestResult } from './student-test-result/student-test-result.js'

import { tests } from './tests/tests.js'

import { standard } from './standard/standard.js'

import { student } from './student/student.js'

export const services = (app) => {
  app.configure(studentTestResult)

  app.configure(tests)

  app.configure(standard)

  app.configure(student)

  // All services will be registered here
}
