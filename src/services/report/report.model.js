import Joi from 'joi'
const attrs = {
  student: Joi.string().required(),
  remark: Joi.string().required(),
  reportFilePath: Joi.string().required(),
  rcn: Joi.string().required()
}

export const reportSchema = Joi.object(attrs)
