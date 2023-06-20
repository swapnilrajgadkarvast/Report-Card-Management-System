// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import validate from 'feathers-validate-joi'
import { resultCalculationSchema } from './result-calculation.schema.js'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  resultCalculationDataValidator,
  resultCalculationPatchValidator,
  resultCalculationQueryValidator,
  resultCalculationResolver,
  resultCalculationExternalResolver,
  resultCalculationDataResolver,
  resultCalculationPatchResolver,
  resultCalculationQueryResolver
} from './result-calculation.schema.js'
import { ResultCalculationService, getOptions } from './result-calculation.class.js'
import { resultCalculationPath, resultCalculationMethods } from './result-calculation.shared.js'
import { fetchStudent } from '../../helpers/hooks/fetchStudent.js'
import { fetchTestResult } from '../../helpers/hooks/fetchStudentTestResult.js'

export * from './result-calculation.class.js'
export * from './result-calculation.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const resultCalculation = (app) => {
  // Register our service on the Feathers application
  app.use(resultCalculationPath, new ResultCalculationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: resultCalculationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(resultCalculationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(resultCalculationExternalResolver),
        schemaHooks.resolveResult(resultCalculationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(resultCalculationQueryValidator),
        schemaHooks.resolveQuery(resultCalculationQueryResolver)
      ],
      find: [],
      get: [fetchStudent(), fetchTestResult()],
      create: [
        validate.form(resultCalculationSchema, { abortEarly: false }),
        fetchStudent(),
        fetchTestResult(),
        schemaHooks.validateData(resultCalculationDataValidator),
        schemaHooks.resolveData(resultCalculationDataResolver)
      ],
      patch: [
        validate.form(resultCalculationSchema, { abortEarly: false }),
        fetchStudent(),
        fetchTestResult(),
        schemaHooks.validateData(resultCalculationPatchValidator),
        schemaHooks.resolveData(resultCalculationPatchResolver)
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
