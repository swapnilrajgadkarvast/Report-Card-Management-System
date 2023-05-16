// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import { testsSchema } from './tests.schema.js'
import validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  testsDataValidator,
  testsPatchValidator,
  testsQueryValidator,
  testsResolver,
  testsExternalResolver,
  testsDataResolver,
  testsPatchResolver,
  testsQueryResolver
} from './tests.schema.js'
import { TestsService, getOptions } from './tests.class.js'
import { testsPath, testsMethods } from './tests.shared.js'
import { fetchStandard } from '../../hooks/fetchStandard.js'
import { fetchDivision } from '../../hooks/fetchDivision.js'
import { fetchSubject } from '../../hooks/fetchsubject.js'

export * from './tests.class.js'
export * from './tests.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const tests = (app) => {
  // Register our service on the Feathers application
  app.use(testsPath, new TestsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: testsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(testsPath).hooks({
    around: {
      all: [
        //authenticate('jwt'),
        schemaHooks.resolveExternal(testsExternalResolver),
        schemaHooks.resolveResult(testsResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(testsQueryValidator), schemaHooks.resolveQuery(testsQueryResolver)],
      find: [],
      get: [],
      create: [
        validate.form(testsSchema, { abortEarly: false }),
        fetchSubject(),
        fetchStandard(),
        fetchDivision(),
        schemaHooks.validateData(testsDataValidator),
        schemaHooks.resolveData(testsDataResolver)
      ],
      update: [
        validate.form(testsSchema, { abortEarly: false }),
        fetchSubject(),
        fetchStandard(),
        fetchDivision(),
        schemaHooks.validateData(testsDataValidator),
        schemaHooks.resolveData(testsDataResolver)
      ],
      patch: [schemaHooks.validateData(testsPatchValidator), schemaHooks.resolveData(testsPatchResolver)],
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
