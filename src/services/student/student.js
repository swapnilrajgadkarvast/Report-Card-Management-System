// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import { newStudentSchema } from './student.model.js'
import validate from 'feathers-validate-joi'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  studentDataValidator,
  studentPatchValidator,
  studentQueryValidator,
  studentResolver,
  studentExternalResolver,
  studentDataResolver,
  studentPatchResolver,
  studentQueryResolver
} from './student.schema.js'
import { StudentService, getOptions } from './student.class.js'
import { studentPath, studentMethods } from './student.shared.js'

export * from './student.class.js'
export * from './student.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const student = (app) => {
  // Register our service on the Feathers application
  app.use(studentPath, new StudentService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: studentMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(studentPath).hooks({
    around: {
      all: [
        // authenticate('jwt'),
        schemaHooks.resolveExternal(studentExternalResolver),
        schemaHooks.resolveResult(studentResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(studentQueryValidator), schemaHooks.resolveQuery(studentQueryResolver)],
      find: [],
      get: [],
      create: [
        validate.form(newStudentSchema, { abortEarly: false }),
        schemaHooks.validateData(studentDataValidator),
        schemaHooks.resolveData(studentDataResolver)
      ],
      update: [
        validate.form(newStudentSchema, { abortEarly: false }),
        schemaHooks.validateData(studentDataValidator),
        schemaHooks.resolveData(studentDataResolver)
      ],
      patch: [schemaHooks.validateData(studentPatchValidator), schemaHooks.resolveData(studentPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
