import Joi from "joi";
const attrs={
    name: Joi.string().required()
}

export const standardJoiSchema=Joi.object(attrs)