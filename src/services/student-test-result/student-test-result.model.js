import Joi from 'joi'
const attrs = {
  student: Joi.string().required(),
  tests: Joi.string().required(),
  obtainedMarks: Joi.number().required(),
  obtainedGrade: Joi.string().required()
}

export const studentTestResultSchema = Joi.object(attrs)
