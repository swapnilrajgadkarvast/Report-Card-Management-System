// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const studentTestResultSchema = {
  $id: 'StudentTestResult',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'student', 'tests', 'obtainedMarks', 'obtainedGrade'],
  properties: {
    _id: ObjectIdSchema(),
    student: ObjectIdSchema(),
    tests: ObjectIdSchema(),
    obtainedMarks: { type: 'number' },
    obtainedGrade: { type: 'string' }
  }
}
export const studentTestResultValidator = getValidator(studentTestResultSchema, dataValidator)
export const studentTestResultResolver = resolve({})

export const studentTestResultExternalResolver = resolve({})

// Schema for creating new data
export const studentTestResultDataSchema = {
  $id: 'StudentTestResultData',
  type: 'object',
  additionalProperties: false,
  required: ['student', 'tests', 'obtainedMarks', 'obtainedGrade'],
  properties: {
    ...studentTestResultSchema.properties
  }
}
export const studentTestResultDataValidator = getValidator(studentTestResultDataSchema, dataValidator)
export const studentTestResultDataResolver = resolve({})

// Schema for updating existing data
export const studentTestResultPatchSchema = {
  $id: 'StudentTestResultPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...studentTestResultSchema.properties
  }
}
export const studentTestResultPatchValidator = getValidator(studentTestResultPatchSchema, dataValidator)
export const studentTestResultPatchResolver = resolve({})

// Schema for allowed query properties
export const studentTestResultQuerySchema = {
  $id: 'StudentTestResultQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(studentTestResultSchema.properties)
  }
}
export const studentTestResultQueryValidator = getValidator(studentTestResultQuerySchema, queryValidator)
export const studentTestResultQueryResolver = resolve({})
