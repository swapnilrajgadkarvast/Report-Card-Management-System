// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const userrolesSchema = {
  $id: 'Userroles',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'user','standard','division','role','year','subject'],
  properties: {
    _id: ObjectIdSchema(),
    user:ObjectIdSchema(),
    role:ObjectIdSchema(),
    standard:ObjectIdSchema(),
    division:ObjectIdSchema(),
    subject:ObjectIdSchema(),
    year:{ type: 'number' },
  }
}
export const userrolesValidator = getValidator(userrolesSchema, dataValidator)
export const userrolesResolver = resolve({})

export const userrolesExternalResolver = resolve({})

// Schema for creating new data
export const userrolesDataSchema = {
  $id: 'UserrolesData',
  type: 'object',
  additionalProperties: false,
  required: ['user','standard','division','role','year','subject'],
  properties: {
    ...userrolesSchema.properties
  }
}
export const userrolesDataValidator = getValidator(userrolesDataSchema, dataValidator)
export const userrolesDataResolver = resolve({})

// Schema for updating existing data
export const userrolesPatchSchema = {
  $id: 'UserrolesPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...userrolesSchema.properties
  }
}
export const userrolesPatchValidator = getValidator(userrolesPatchSchema, dataValidator)
export const userrolesPatchResolver = resolve({})

// Schema for allowed query properties
export const userrolesQuerySchema = {
  $id: 'UserrolesQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(userrolesSchema.properties)
  }
}
export const userrolesQueryValidator = getValidator(userrolesQuerySchema, queryValidator)
export const userrolesQueryResolver = resolve({})
