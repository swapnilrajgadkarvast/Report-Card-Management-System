import Joi from "joi";
const attrs={
    userId: Joi.string().required(),
    standardId:Joi.string().required(),
    divisionId:Joi.string().required(),
    role:Joi.string().required(),
    year:Joi.string().required(),
    subject:Joi.string().required(),
}
export const userrolesJoiSchema=Joi.object(attrs)