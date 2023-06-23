// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import { reportSchema } from './report.model.js'
import validate from 'feathers-validate-joi'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  reportDataValidator,
  reportPatchValidator,
  reportQueryValidator,
  reportResolver,
  reportExternalResolver,
  reportDataResolver,
  reportPatchResolver,
  reportQueryResolver
} from './report.schema.js'
import { ReportService, getOptions } from './report.class.js'
import { reportPath, reportMethods } from './report.shared.js'
import { fetchStudent } from '../../helpers/hooks/fetchStudent.js'
import { uploadReport } from './hooks/uploadReport.js'
import multer from 'multer'
import { sendEmailWithPDF } from '../../helpers/emailSender/sendEmailPDF.js'

export * from './report.class.js'
export * from './report.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const report = (app) => {
  // Register our service on the Feathers application
  app.use(
    reportPath,

    multer({
      storage: multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'src/uploads')
        },
        filename: function (req, file, cb) {
          const ext = file.originalname.split('.')
          console.log(ext[1])
          cb(null, file.originalname, +'.' + ext[1])
        }
      })
    }).single('file'),
    (req, res, next) => {
      req.feathers.file = req.file
      next()
    },

    new ReportService(getOptions(app)),
    {
      // A list of all methods this service exposes externally
      methods: reportMethods,
      // You can add additional custom events to be sent to clients here
      events: []
    }
  )
  // Initialize hooks
  app.service(reportPath).hooks({
    around: {
      all: [
        // authenticate('jwt'),
        schemaHooks.resolveExternal(reportExternalResolver),
        schemaHooks.resolveResult(reportResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(reportQueryValidator), schemaHooks.resolveQuery(reportQueryResolver)],
      find: [],
      get: [],
      create: [
        validate.form(reportSchema, { abortEarly: false }),
        // fetchStudent(),
        // uploadReport(),
        // sendEmailWithPDF(),
        schemaHooks.validateData(reportDataValidator),
        schemaHooks.resolveData(reportDataResolver)
      ],
      update: [
        validate.form(reportSchema, { abortEarly: false }),
        schemaHooks.validateData(reportDataValidator),
        schemaHooks.resolveData(reportDataResolver)
      ],
      patch: [schemaHooks.validateData(reportPatchValidator), schemaHooks.resolveData(reportPatchResolver)],
      remove: []
    },
    after: {
      all: [],
      create: [sendEmailWithPDF()]
    },
    error: {
      all: []
    }
  })
}
