// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import { divisionJoiSchema } from './division.joimodel.js'
import validate from 'feathers-validate-joi'
import { fetchStandard } from '../../hooks/fetchStandard.js'
import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  divisionDataValidator,
  divisionPatchValidator,
  divisionQueryValidator,
  divisionResolver,
  divisionExternalResolver,
  divisionDataResolver,
  divisionPatchResolver,
  divisionQueryResolver
} from './division.schema.js'
import { DivisionService, getOptions } from './division.class.js'
import { divisionPath, divisionMethods } from './division.shared.js'

export * from './division.class.js'
export * from './division.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const division = (app) => {
  // Register our service on the Feathers application
  app.use(divisionPath, new DivisionService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: divisionMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(divisionPath).hooks({
    around: {
      all: [
       // authenticate('jwt'),
        schemaHooks.resolveExternal(divisionExternalResolver),
        schemaHooks.resolveResult(divisionResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(divisionQueryValidator),
        schemaHooks.resolveQuery(divisionQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        validate.form(divisionJoiSchema, { abortEarly: false }),
        //fetchStandard(),
        schemaHooks.validateData(divisionDataValidator),
        schemaHooks.resolveData(divisionDataResolver)
      ],
      patch: [
        schemaHooks.validateData(divisionPatchValidator),
        schemaHooks.resolveData(divisionPatchResolver)
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
