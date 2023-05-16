import Joi from 'joi'
const attrs = {
  firstName: Joi.string().min(3).max(50).required(),
  middleName: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(50).required(),
  standard: Joi.string().required(),
  division: Joi.string().required(),
  rollNumber: Joi.string().required(),
  year: Joi.number().required(),
  dateOfBirth: Joi.string().required(),
  parent: {
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    phone: Joi.string().min(10).max(10),
    email: Joi.string().required(),
    addressLine1: Joi.string().min(3).max(50).required(),
    addressLine2: Joi.string().min(3).max(50).required(),
    area: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipcode: Joi.string().required(),
    relationship: Joi.string().required()
  },
  isActive: Joi.boolean().required()
}

export const newStudentSchema = Joi.object(attrs)
