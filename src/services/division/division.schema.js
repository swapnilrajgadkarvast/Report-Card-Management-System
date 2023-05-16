// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const divisionSchema = {
  $id: 'Division',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'name'],
  properties: {
    _id: ObjectIdSchema(),
    name: {type: 'string'}
  }
}

export const divisionValidator = getValidator(divisionSchema, dataValidator)
export const divisionResolver = resolve({})

export const divisionExternalResolver = resolve({})

// Schema for creating new data
export const divisionDataSchema = {
    $id: 'DivisionData',
    type: 'object',
    additionalProperties: false,
    required: ['name'],
    properties: {
      ...divisionSchema.properties
    }
  }
export const divisionDataValidator = getValidator(divisionDataSchema, dataValidator)
export const divisionDataResolver = resolve({})

// Schema for updating existing data
export const divisionPatchSchema = {
    $id: 'DivisionPatch',
    type: 'object',
    additionalProperties: false,
    required: [],
    properties: {
      ...divisionSchema.properties
    }
  }
export const divisionPatchValidator = getValidator(divisionPatchSchema, dataValidator)
export const divisionPatchResolver = resolve({})

// Schema for allowed query properties
export const divisionQuerySchema = {
    $id: 'DivisionQuery',
    type: 'object',
    additionalProperties: false,
    properties: {
      ...querySyntax(divisionSchema.properties)
    }
  }
export const divisionQueryValidator = getValidator(divisionQuerySchema, queryValidator)
export const divisionQueryResolver = resolve({})
