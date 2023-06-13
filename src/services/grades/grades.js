// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import validate from 'feathers-validate-joi'
import { gradesJoiSchema } from './grades.joimodel.js'
import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  gradesDataValidator,
  gradesPatchValidator,
  gradesQueryValidator,
  gradesResolver,
  gradesExternalResolver,
  gradesDataResolver,
  gradesPatchResolver,
  gradesQueryResolver
} from './grades.schema.js'
import { GradesService, getOptions } from './grades.class.js'
import { gradesPath, gradesMethods } from './grades.shared.js'

export * from './grades.class.js'
export * from './grades.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const grades = (app) => {
  // Register our service on the Feathers application
  app.use(gradesPath, new GradesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: gradesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(gradesPath).hooks({
    around: {
      all: [
        // authenticate('jwt'),
        schemaHooks.resolveExternal(gradesExternalResolver),
        schemaHooks.resolveResult(gradesResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(gradesQueryValidator), schemaHooks.resolveQuery(gradesQueryResolver)],
      find: [],
      get: [],
      create: [
        validate.form(gradesJoiSchema),
        schemaHooks.validateData(gradesDataValidator),
        schemaHooks.resolveData(gradesDataResolver)
      ],
      patch: [
        schemaHooks.validateData(gradesPatchValidator),
        schemaHooks.resolveData(gradesPatchResolver)
      ],
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
