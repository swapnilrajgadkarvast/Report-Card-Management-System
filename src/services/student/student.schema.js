// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const studentSchema = {
  $id: 'Student',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'studentName', 'birthDate', 'parentName', 'parentEmail', 'parentContact', 'rollNumber', 'address'],
  properties: {
    _id: ObjectIdSchema(),
    studentName: { type: 'string' },
    birthDate: { type: 'string', format: 'date' },
    parentName: { type: 'string' },
    parentEmail: { type: 'string' },
    parentContact: { type: 'string' },
    rollNumber: { type: 'string' },
    address: { type: 'string' }
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
  required: [ 'studentName', 'birthDate', 'parentName', 'parentEmail', 'parentContact', 'rollNumber', 'address'],
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
