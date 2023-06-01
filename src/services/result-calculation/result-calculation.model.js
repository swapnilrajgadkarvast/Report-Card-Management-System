import Joi from 'joi'
const attrs = {
  student: Joi.string().required(),
  testName: Joi.string().required(),
//   tests: Joi.string().required()
//   studentTestResult: Joi.string().required()
}

export const resultCalculationSchema = Joi.object(attrs)
