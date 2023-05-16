// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import validate from 'feathers-validate-joi'
import { subjectJoiSchema } from './subject.joimodel.js'
import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  subjectsDataValidator,
  subjectsPatchValidator,
  subjectsQueryValidator,
  subjectsResolver,
  subjectsExternalResolver,
  subjectsDataResolver,
  subjectsPatchResolver,
  subjectsQueryResolver
} from './subjects.schema.js'
import { SubjectsService, getOptions } from './subjects.class.js'
import { subjectsPath, subjectsMethods } from './subjects.shared.js'

export * from './subjects.class.js'
export * from './subjects.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const subjects = (app) => {
  // Register our service on the Feathers application
  app.use(subjectsPath, new SubjectsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: subjectsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(subjectsPath).hooks({
    around: {
      all: [
       // authenticate('jwt'),
        schemaHooks.resolveExternal(subjectsExternalResolver),
        schemaHooks.resolveResult(subjectsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(subjectsQueryValidator),
        schemaHooks.resolveQuery(subjectsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        validate.form(subjectJoiSchema),
        schemaHooks.validateData(subjectsDataValidator),
        schemaHooks.resolveData(subjectsDataResolver)
      ],
      patch: [
        schemaHooks.validateData(subjectsPatchValidator),
        schemaHooks.resolveData(subjectsPatchResolver)
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
