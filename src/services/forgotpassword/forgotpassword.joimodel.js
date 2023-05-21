import Joi from 'joi'
const attrs = {
   currentPassword: Joi.string().required(),
  newPassword: Joi.string().min(3).max(50).required(),
  confirmedPassword: Joi.string().min(3).max(50).required(),
  email: Joi.string().min(3).max(50).required(),
}

export const forgotpasswordSchema = Joi.object(attrs)
