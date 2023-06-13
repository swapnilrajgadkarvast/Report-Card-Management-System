import Joi from 'joi'
const attrs = {
  user: Joi.string().required(),
  subject: Joi.string().required(),
  standard: Joi.string().required(),
  division: Joi.string().required(),
  role: Joi.string().required(),
  year: Joi.number().required()
}
export const userrolesJoiSchema = Joi.object(attrs)
