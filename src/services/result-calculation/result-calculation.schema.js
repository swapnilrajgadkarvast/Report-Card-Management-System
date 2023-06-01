// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const resultCalculationSchema = {
  $id: 'ResultCalculation',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'student', 'testName'],
  properties: {
    _id: ObjectIdSchema(),
    student: ObjectIdSchema(),
    testName: { type: 'string' }
    // tests: ObjectIdSchema()
    // studentTestResult: ObjectIdSchema()
  }
}
export const resultCalculationValidator = getValidator(resultCalculationSchema, dataValidator)
export const resultCalculationResolver = resolve({})

export const resultCalculationExternalResolver = resolve({})

// Schema for creating new data
export const resultCalculationDataSchema = {
  $id: 'ResultCalculationData',
  type: 'object',
  additionalProperties: false,
  required: ['student', 'testName'],
  properties: {
    ...resultCalculationSchema.properties
  }
}
export const resultCalculationDataValidator = getValidator(resultCalculationDataSchema, dataValidator)
export const resultCalculationDataResolver = resolve({})

// Schema for updating existing data
export const resultCalculationPatchSchema = {
  $id: 'ResultCalculationPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...resultCalculationSchema.properties
  }
}
export const resultCalculationPatchValidator = getValidator(resultCalculationPatchSchema, dataValidator)
export const resultCalculationPatchResolver = resolve({})

// Schema for allowed query properties
export const resultCalculationQuerySchema = {
  $id: 'ResultCalculationQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(resultCalculationSchema.properties)
  }
}
export const resultCalculationQueryValidator = getValidator(resultCalculationQuerySchema, queryValidator)
export const resultCalculationQueryResolver = resolve({})
