import Joi from 'joi'
const attrs = {
  studentName: Joi.string().min(3).max(50).required(),
  birthDate: Joi.string().required(),
  parentName: Joi.string().required(),
  parentEmail: Joi.string().required(),
  parentContact: Joi.string().min(10).max(10),
  rollNumber: Joi.string().required(),
  address: Joi.string().required()
}

export const newStudentSchema = Joi.object(attrs)
