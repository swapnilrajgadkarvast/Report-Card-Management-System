// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import validate from 'feathers-validate-joi'
import { userrolesJoiSchema } from './userroles.joimodel.js'
import { fetchDivision } from '../../hooks/fetchDivision.js'
import {fetchStandard} from '../../hooks/fetchStandard.js'
import {fetchUser} from '../../hooks/fetchUser.js'
import {fetchSubject} from '../../hooks/fetchsubject.js'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  userrolesDataValidator,
  userrolesPatchValidator,
  userrolesQueryValidator,
  userrolesResolver,
  userrolesExternalResolver,
  userrolesDataResolver,
  userrolesPatchResolver,
  userrolesQueryResolver
} from './userroles.schema.js'
import { UserrolesService, getOptions } from './userroles.class.js'
import { userrolesPath, userrolesMethods } from './userroles.shared.js'

export * from './userroles.class.js'
export * from './userroles.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const userroles = (app) => {
  // Register our service on the Feathers application
  app.use(userrolesPath, new UserrolesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: userrolesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(userrolesPath).hooks({
    around: {
      all: [
       // authenticate('jwt'),
        schemaHooks.resolveExternal(userrolesExternalResolver),
        schemaHooks.resolveResult(userrolesResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(userrolesQueryValidator),
        schemaHooks.resolveQuery(userrolesQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        validate.form(userrolesJoiSchema, { abortEarly: false }),
          fetchDivision(),
          fetchStandard(),
          fetchSubject(),
          fetchUser(),
        schemaHooks.validateData(userrolesDataValidator),
        schemaHooks.resolveData(userrolesDataResolver)
      ],
      patch: [
        schemaHooks.validateData(userrolesPatchValidator),
        schemaHooks.resolveData(userrolesPatchResolver)
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
