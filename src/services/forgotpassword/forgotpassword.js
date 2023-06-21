// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { emailConfirmedPassword } from '../../helpers/emailSender/emailConfirmedPassword.js'
import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  forgotpasswordDataValidator,
  // forgotpasswordPatchValidator,
  // forgotpasswordQueryValidator,
  // forgotpasswordResolver,
  // forgotpasswordExternalResolver,
  forgotpasswordDataResolver
  // forgotpasswordPatchResolver,
  // forgotpasswordQueryResolver
} from './forgotpassword.schema.js'
import { ForgotpasswordService, getOptions } from './forgotpassword.class.js'
import { forgotpasswordPath, forgotpasswordMethods } from './forgotpassword.shared.js'

export * from './forgotpassword.class.js'
export * from './forgotpassword.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const forgotpassword = (app) => {
  // Register our service on the Feathers application
  app.use(forgotpasswordPath, new ForgotpasswordService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: forgotpasswordMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(forgotpasswordPath).hooks({
    around: {
      // all: [
      //   schemaHooks.resolveExternal(forgotpasswordExternalResolver),
      //   schemaHooks.resolveResult(forgotpasswordResolver)
      // ]
    },
    before: {
      // all: [
      //   schemaHooks.validateQuery(forgotpasswordQueryValidator),
      //   schemaHooks.resolveQuery(forgotpasswordQueryResolver)
      // ],
      // find: [],
      // get: [],
      create: [
        emailConfirmedPassword(),
        schemaHooks.validateData(forgotpasswordDataValidator),
        schemaHooks.resolveData(forgotpasswordDataResolver)
      ]
      // patch: [
      //   schemaHooks.validateData(forgotpasswordPatchValidator),
      //   schemaHooks.resolveData(forgotpasswordPatchResolver)
      // ],
      // remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
