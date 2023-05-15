// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const studentSchema = {
  $id: 'Student',
  type: 'object',
  additionalProperties: false,
  required: [
    '_id',
    'firstName',
    'middleName',
    'lastName',
    'standard',
    'division',
    'rollNumber',
    'year',
    'dateOfBirth',
    'parent',
    'isActive'
  ],
  properties: {
    _id: ObjectIdSchema(),
    firstName: { type: 'string' },
    middleName: { type: 'string' },
    lastName: { type: 'string' },
    standard: { type: 'string' },
    division: { type: 'string' },
    rollNumber: { type: 'string' },
    year: { type: 'number' },
    dateOfBirth: { type: 'string', format: 'date' },
    parent: { type: 'object' },
    isActive: { type: 'boolean' }
  }
}
export const studentValidator = getValidator(studentSchema, dataValidator)
export const studentResolver = resolve({})

export const studentExternalResolver = resolve({})

// Schema for creating new data
export const studentDataSchema = {
  $id: 'StudentData',
  type: 'object',
  additionalProperties: false,
  required: [
    'firstName',
    'middleName',
    'lastName',
    'standard',
    'division',
    'rollNumber',
    'year',
    'dateOfBirth',
    'parent',
    'isActive'
  ],
  properties: {
    ...studentSchema.properties
  }
}
export const studentDataValidator = getValidator(studentDataSchema, dataValidator)
export const studentDataResolver = resolve({})

// Schema for updating existing data
export const studentPatchSchema = {
  $id: 'StudentPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...studentSchema.properties
  }
}
export const studentPatchValidator = getValidator(studentPatchSchema, dataValidator)
export const studentPatchResolver = resolve({})

// Schema for allowed query properties
export const studentQuerySchema = {
  $id: 'StudentQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(studentSchema.properties)
  }
}
export const studentQueryValidator = getValidator(studentQuerySchema, queryValidator)
export const studentQueryResolver = resolve({})
