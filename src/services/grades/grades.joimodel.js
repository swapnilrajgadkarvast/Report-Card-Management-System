import Joi from "joi";
const attrs={
    name: Joi.string().required(),
    start: Joi.string().required(),
    end: Joi.string().required(),
}

export const gradesJoiSchema=Joi.object(attrs)