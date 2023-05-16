// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const gradesSchema = {
  $id: 'Grades',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'name', 'start', 'end'],
  properties: {
    _id: ObjectIdSchema(),
    name: { type: 'string' },
    start: { type: 'string' },
    end: { type: 'string' }
  }
}
export const gradesValidator = getValidator(gradesSchema, dataValidator)
export const gradesResolver = resolve({})

export const gradesExternalResolver = resolve({})

// Schema for creating new data
export const gradesDataSchema = {
  $id: 'GradesData',
  type: 'object',
  additionalProperties: false,
  required: ['name', 'start', 'end'],
  properties: {
    ...gradesSchema.properties
  }
}
export const gradesDataValidator = getValidator(gradesDataSchema, dataValidator)
export const gradesDataResolver = resolve({})

// Schema for updating existing data
export const gradesPatchSchema = {
  $id: 'GradesPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...gradesSchema.properties
  }
}
export const gradesPatchValidator = getValidator(gradesPatchSchema, dataValidator)
export const gradesPatchResolver = resolve({})

// Schema for allowed query properties
export const gradesQuerySchema = {
  $id: 'GradesQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(gradesSchema.properties)
  }
}
export const gradesQueryValidator = getValidator(gradesQuerySchema, queryValidator)
export const gradesQueryResolver = resolve({})
