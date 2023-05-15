import Joi from 'joi'
const attrs = {
  studentId: Joi.string().required(),
  test: Joi.string().required(),
  obtainedMarks: Joi.number().required(),
  obtainedGrade: Joi.string().required()
}

export const studentTestResultSchema = Joi.object(attrs)
