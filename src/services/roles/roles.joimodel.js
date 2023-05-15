import Joi from "joi";
const attrs={
    name: Joi.string().required()
}

export const rolesJoiSchema=Joi.object(attrs)