// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
//import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
// export const forgotpasswordSchema = {
//   $id: 'Forgotpassword',
//   type: 'object',
//   additionalProperties: false,
//   required: ['_id', 'text'],
//   properties: {
//     _id: ObjectIdSchema(),
//     text: { type: 'string' }
//   }
// }
// export const forgotpasswordValidator = getValidator(forgotpasswordSchema, dataValidator)
// export const forgotpasswordResolver = resolve({})

// export const forgotpasswordExternalResolver = resolve({})

// Schema for creating new data
export const forgotpasswordDataSchema = {
  $id: 'ForgotpasswordData',
  type: 'object',
  additionalProperties: false,
  required: ['currentPassword', 'newPassword', 'email', 'confirmedPassword'],
  properties: {
    //...forgotpasswordSchema.properties
    currentPassword: { type: 'string' },
    newPassword: { type: 'string' },
    confirmedPassword: { type: 'string' },
    email: { type: 'string' }
  }
}
export const forgotpasswordDataValidator = getValidator(forgotpasswordDataSchema, dataValidator)
export const forgotpasswordDataResolver = resolve({})

// Schema for updating existing data
// export const forgotpasswordPatchSchema = {
//   $id: 'ForgotpasswordPatch',
//   type: 'object',
//   additionalProperties: false,
//   required: [],
//   properties: {
//     ...forgotpasswordSchema.properties
//   }
// }
// export const forgotpasswordPatchValidator = getValidator(forgotpasswordPatchSchema, dataValidator)
// export const forgotpasswordPatchResolver = resolve({})

// Schema for allowed query properties
// export const forgotpasswordQuerySchema = {
//   $id: 'ForgotpasswordQuery',
//   type: 'object',
//   additionalProperties: false,
//   properties: {
//     ...querySyntax(forgotpasswordSchema.properties)
//   }
// }
// export const forgotpasswordQueryValidator = getValidator(forgotpasswordQuerySchema, queryValidator)
// export const forgotpasswordQueryResolver = resolve({})
