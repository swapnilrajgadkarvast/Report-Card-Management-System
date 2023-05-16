import Joi from 'joi'
const attrs = {
  name: Joi.string().required(),
  start: Joi.string().required(),
  end: Joi.string().required(),
}

export const gradeSchema = Joi.object(attrs)
