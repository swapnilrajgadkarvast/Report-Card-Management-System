import Joi from 'joi'
const attrs = {
  firstName: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(5).max(255).required(),
  phone: Joi.string().min(10).max(10).required(),
  userName: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(8).max(1024).required(),
  lastLoggedIn: Joi.string().default(() => new Date().toISOString()),
  isActive: Joi.boolean().default(true),
  role: Joi.string().default('General User'),
  updatedBy: Joi.string().default('6489a3abbb5ca82bca72dd4b'),
  updatedAt: Joi.string().default(() => new Date().toISOString())
}

export const userJoiSchema = Joi.object(attrs)
