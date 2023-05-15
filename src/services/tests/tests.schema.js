// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const testsSchema = {
  $id: 'Tests',
  type: 'object',
  additionalProperties: false,
  required: [
    '_id',
    'name',
    'totalMarks',
    'subject',
    'standard',
    'division',
    'year',
    'highestMarks',
    'averageMarks'
  ],
  properties: {
    _id: ObjectIdSchema(),
    name: { type: 'string' },
    totalMarks: { type: 'number' },
    subject: { type: 'string' },
    standard: { type: 'string' },
    division: { type: 'string' },
    year: { type: 'number' },
    highestMarks: { type: 'number' },
    averageMarks: { type: 'number' }
  }
}
export const testsValidator = getValidator(testsSchema, dataValidator)
export const testsResolver = resolve({})

export const testsExternalResolver = resolve({})

// Schema for creating new data
export const testsDataSchema = {
  $id: 'TestsData',
  type: 'object',
  additionalProperties: false,
  required: ['name', 'totalMarks', 'subject', 'standard', 'division', 'year', 'highestMarks', 'averageMarks'],
  properties: {
    ...testsSchema.properties
  }
}
export const testsDataValidator = getValidator(testsDataSchema, dataValidator)
export const testsDataResolver = resolve({})

// Schema for updating existing data
export const testsPatchSchema = {
  $id: 'TestsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...testsSchema.properties
  }
}
export const testsPatchValidator = getValidator(testsPatchSchema, dataValidator)
export const testsPatchResolver = resolve({})

// Schema for allowed query properties
export const testsQuerySchema = {
  $id: 'TestsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(testsSchema.properties)
  }
}
export const testsQueryValidator = getValidator(testsQuerySchema, queryValidator)
export const testsQueryResolver = resolve({})
