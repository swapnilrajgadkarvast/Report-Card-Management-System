// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const rolesSchema = {
  $id: 'Roles',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'name'],
  properties: {
    _id: ObjectIdSchema(),
    name: { type: 'string' }
  }
}
export const rolesValidator = getValidator(rolesSchema, dataValidator)
export const rolesResolver = resolve({})

export const rolesExternalResolver = resolve({})

// Schema for creating new data
export const rolesDataSchema = {
  $id: 'RolesData',
  type: 'object',
  additionalProperties: false,
  required: ['name'],
  properties: {
    ...rolesSchema.properties
  }
}
export const rolesDataValidator = getValidator(rolesDataSchema, dataValidator)
export const rolesDataResolver = resolve({})

// Schema for updating existing data
export const rolesPatchSchema = {
  $id: 'RolesPatch',
  type: 'object',
  additionalProperties: false,
  required: ['name'],
  properties: {
    ...rolesSchema.properties
  }
}
export const rolesPatchValidator = getValidator(rolesPatchSchema, dataValidator)
export const rolesPatchResolver = resolve({})

// Schema for allowed query properties
export const rolesQuerySchema = {
  $id: 'RolesQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(rolesSchema.properties)
  }
}
export const rolesQueryValidator = getValidator(rolesQuerySchema, queryValidator)
export const rolesQueryResolver = resolve({})
