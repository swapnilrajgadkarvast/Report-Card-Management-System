// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import { studentTestResultSchema } from './student-test-result.model.js'
import validate from 'feathers-validate-joi'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  studentTestResultDataValidator,
  studentTestResultPatchValidator,
  studentTestResultQueryValidator,
  studentTestResultResolver,
  studentTestResultExternalResolver,
  studentTestResultDataResolver,
  studentTestResultPatchResolver,
  studentTestResultQueryResolver
} from './student-test-result.schema.js'
import { StudentTestResultService, getOptions } from './student-test-result.class.js'
import { studentTestResultPath, studentTestResultMethods } from './student-test-result.shared.js'

import { fetchGrade } from '../../helpers/hooks/fetchGrade.js'
import { updateHeighestMarksAndAverageMarks } from '../../helpers/hooks/updateHeighestMarksAndAverageMarks.js'
import { fetchStudent } from '../../helpers/hooks/fetchStudent.js'
import { fetchTests } from '../../helpers/hooks/fetchTest.js'

export * from './student-test-result.class.js'
export * from './student-test-result.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const studentTestResult = (app) => {
  // Register our service on the Feathers application
  app.use(studentTestResultPath, new StudentTestResultService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: studentTestResultMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(studentTestResultPath).hooks({
    around: {
      all: [
        // authenticate('jwt'),
        schemaHooks.resolveExternal(studentTestResultExternalResolver),
        schemaHooks.resolveResult(studentTestResultResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(studentTestResultQueryValidator),
        schemaHooks.resolveQuery(studentTestResultQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        validate.form(studentTestResultSchema, { abortEarly: false }),
        fetchStudent(),
        fetchTests(),
        // fetchGrade(),
        schemaHooks.validateData(studentTestResultDataValidator),
        schemaHooks.resolveData(studentTestResultDataResolver)
      ],
      update: [
        validate.form(studentTestResultSchema, { abortEarly: false }),
        fetchStudent(),
        fetchTests(),
        fetchGrade(),
        schemaHooks.validateData(studentTestResultDataValidator),
        schemaHooks.resolveData(studentTestResultDataResolver)
      ],
      patch: [
        schemaHooks.validateData(studentTestResultPatchValidator),
        schemaHooks.resolveData(studentTestResultPatchResolver)
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
