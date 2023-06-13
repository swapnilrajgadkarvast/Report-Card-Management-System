import { division } from './division/division.js'

import { resultCalculation } from './result-calculation/result-calculation.js'

import { grades } from './grades/grades.js'

import { report } from './report/report.js'

import { roles } from './roles/roles.js'

import { standard } from './standard/standard.js'

import { student } from './student/student.js'

import { studentTestResult } from './student-test-result/student-test-result.js'

import { subjects } from './subjects/subjects.js'

import { tests } from './tests/tests.js'

import { forgotpassword } from './forgotpassword/forgotpassword.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(division)

  app.configure(resultCalculation)
  
  app.configure(grades)

  app.configure(report)

  app.configure(roles)

  app.configure(standard)

  app.configure(student)

  app.configure(studentTestResult)

  app.configure(subjects)

  app.configure(tests)

  app.configure(forgotpassword)

  app.configure(user)
  // All services will be registered here
}
