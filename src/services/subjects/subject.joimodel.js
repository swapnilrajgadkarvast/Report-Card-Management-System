import Joi from "joi";
const attrs={
        name: Joi.string().required(),
}
export const subjectJoiSchema=Joi.object(attrs)