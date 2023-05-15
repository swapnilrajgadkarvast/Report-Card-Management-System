import Joi from "joi";
const attrs={
    name: Joi.string().min(3).max(50).required(),
    totalMarks: Joi.number().required(),
    subject: Joi.string().required(),
    standard: Joi.string().required(),
    division: Joi.string().required(),
    year: Joi.number().required(),
    highestMarks : Joi.number().required(),
    averageMarks : Joi.number().required()
}

export const testsSchema=Joi.object(attrs)