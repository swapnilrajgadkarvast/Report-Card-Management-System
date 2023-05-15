// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  standardDataValidator,
  standardPatchValidator,
  standardQueryValidator,
  standardResolver,
  standardExternalResolver,
  standardDataResolver,
  standardPatchResolver,
  standardQueryResolver
} from './standard.schema.js'
import { StandardService, getOptions } from './standard.class.js'
import { standardPath, standardMethods } from './standard.shared.js'

export * from './standard.class.js'
export * from './standard.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const standard = (app) => {
  // Register our service on the Feathers application
  app.use(standardPath, new StandardService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: standardMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(standardPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(standardExternalResolver),
        schemaHooks.resolveResult(standardResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(standardQueryValidator),
        schemaHooks.resolveQuery(standardQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(standardDataValidator),
        schemaHooks.resolveData(standardDataResolver)
      ],
      patch: [
        schemaHooks.validateData(standardPatchValidator),
        schemaHooks.resolveData(standardPatchResolver)
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
