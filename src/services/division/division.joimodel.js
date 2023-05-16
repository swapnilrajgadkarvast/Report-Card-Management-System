import Joi from "joi";
const attrs={
    //standardId: Joi.string().required(),
    name: Joi.string().required(),
}

export const divisionJoiSchema=Joi.object(attrs)