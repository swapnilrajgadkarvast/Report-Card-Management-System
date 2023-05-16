// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const reportSchema = {
  $id: 'Report',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'student', 'remark', 'reportFilePath', 'rcn'],
  properties: {
    _id: ObjectIdSchema(),
    student: ObjectIdSchema(),
    remark: { type: 'string' },
    reportFilePath: { type: 'string' },
    rcn: { type: 'string' }
  }
}
export const reportValidator = getValidator(reportSchema, dataValidator)
export const reportResolver = resolve({})

export const reportExternalResolver = resolve({})

// Schema for creating new data
export const reportDataSchema = {
  $id: 'ReportData',
  type: 'object',
  additionalProperties: false,
  required: ['student', 'remark', 'reportFilePath', 'rcn'],
  properties: {
    ...reportSchema.properties
  }
}
export const reportDataValidator = getValidator(reportDataSchema, dataValidator)
export const reportDataResolver = resolve({})

// Schema for updating existing data
export const reportPatchSchema = {
  $id: 'ReportPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...reportSchema.properties
  }
}
export const reportPatchValidator = getValidator(reportPatchSchema, dataValidator)
export const reportPatchResolver = resolve({})

// Schema for allowed query properties
export const reportQuerySchema = {
  $id: 'ReportQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(reportSchema.properties)
  }
}
export const reportQueryValidator = getValidator(reportQuerySchema, queryValidator)
export const reportQueryResolver = resolve({})
