import { subjects } from './subjects/subjects.js'

import { userroles } from './userroles/userroles.js'

import { grades } from './grades/grades.js'

import { roles } from './roles/roles.js'

import { division } from './division/division.js'

import { standard } from './standard/standard.js'

export const services = (app) => {
  app.configure(subjects)

  app.configure(userroles)

  app.configure(grades)

  app.configure(roles)

  app.configure(division)

  app.configure(standard)

  // All services will be registered here
}
