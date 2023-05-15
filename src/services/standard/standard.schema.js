// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const standardSchema = {
  $id: 'Standard',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'standard'],
  properties: {
    _id: ObjectIdSchema(),
    standard: { type: 'string' }
  }
}
export const standardValidator = getValidator(standardSchema, dataValidator)
export const standardResolver = resolve({})

export const standardExternalResolver = resolve({})

// Schema for creating new data
export const standardDataSchema = {
  $id: 'StandardData',
  type: 'object',
  additionalProperties: false,
  required: ['text'],
  properties: {
    ...standardSchema.properties
  }
}
export const standardDataValidator = getValidator(standardDataSchema, dataValidator)
export const standardDataResolver = resolve({})

// Schema for updating existing data
export const standardPatchSchema = {
  $id: 'StandardPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...standardSchema.properties
  }
}
export const standardPatchValidator = getValidator(standardPatchSchema, dataValidator)
export const standardPatchResolver = resolve({})

// Schema for allowed query properties
export const standardQuerySchema = {
  $id: 'StandardQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(standardSchema.properties)
  }
}
export const standardQueryValidator = getValidator(standardQuerySchema, queryValidator)
export const standardQueryResolver = resolve({})
