import Joi from 'joi'
const attrs = {
  standard: Joi.string().min(3).max(50)
}

export const standardSchema = Joi.object(attrs)
