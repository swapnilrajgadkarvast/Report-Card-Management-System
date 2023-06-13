// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import { userJoiSchema } from './users.joimodel.js'
import validate from 'feathers-validate-joi'
import senduserRegistrationMail from './hooks/sendUserRegistrationMail.js'
import checkUniqueUserName from './hooks/checkUniqueUserName.js'
import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  userDataValidator,
  userPatchValidator,
  userQueryValidator,
  userResolver,
  userExternalResolver,
  userDataResolver,
  userPatchResolver,
  userQueryResolver
} from './users.schema.js'
import { UserService, getOptions } from './users.class.js'
import { userPath, userMethods } from './users.shared.js'

export * from './users.class.js'
export * from './users.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const user = (app) => {
  // Register our service on the Feathers application
  app.use(userPath, new UserService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: userMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(userPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(userExternalResolver), schemaHooks.resolveResult(userResolver)],
      find: [],
      get: [],
      create: [],
      update: [authenticate('jwt')],
      patch: [authenticate('jwt')],
      remove: [authenticate('jwt')]
    },
    before: {
      all: [schemaHooks.validateQuery(userQueryValidator), schemaHooks.resolveQuery(userQueryResolver)],
      find: [],
      get: [],

      create: [
        validate.form(userJoiSchema, { abortEarly: false }),
        checkUniqueUserName(),
        schemaHooks.validateData(userDataValidator),
        schemaHooks.resolveData(userDataResolver)
      ],

      patch: [schemaHooks.validateData(userPatchValidator), schemaHooks.resolveData(userPatchResolver)],
      remove: []
    },
    after: {
      all: [],
      create: [senduserRegistrationMail()]
    },
    error: {
      all: []
    }
  })
}
