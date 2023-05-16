// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const subjectsSchema = {
  $id: 'Subjects',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'name'],
  properties: {
    _id: ObjectIdSchema(),
    name: { type: 'string' }
  }
}
export const subjectsValidator = getValidator(subjectsSchema, dataValidator)
export const subjectsResolver = resolve({})

export const subjectsExternalResolver = resolve({})

// Schema for creating new data
export const subjectsDataSchema = {
  $id: 'SubjectsData',
  type: 'object',
  additionalProperties: false,
  required: ['name'],
  properties: {
    ...subjectsSchema.properties
  }
}
export const subjectsDataValidator = getValidator(subjectsDataSchema, dataValidator)
export const subjectsDataResolver = resolve({})

// Schema for updating existing data
export const subjectsPatchSchema = {
  $id: 'SubjectsPatch',
  type: 'object',
  additionalProperties: false,
  required: ['name'],
  properties: {
    ...subjectsSchema.properties
  }
}
export const subjectsPatchValidator = getValidator(subjectsPatchSchema, dataValidator)
export const subjectsPatchResolver = resolve({})

// Schema for allowed query properties
export const subjectsQuerySchema = {
  $id: 'SubjectsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(subjectsSchema.properties)
  }
}
export const subjectsQueryValidator = getValidator(subjectsQuerySchema, queryValidator)
export const subjectsQueryResolver = resolve({})
