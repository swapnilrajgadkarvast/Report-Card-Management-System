import Joi from "joi";
const attrs={
    name: Joi.string().required(),
    totalMarks:Joi.number().required(),
    subject: Joi.string().required(),
    standard:Joi.string().required(),
    division: Joi.string().required(),
    year: Joi.string().required(),
    heighestMarks:Joi.number().required(),
    averageMarks: Joi.boolean(),
}

export const testsSchema=Joi.object(attrs)