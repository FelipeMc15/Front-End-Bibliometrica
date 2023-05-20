import * as yup from "yup";
export const serviceNewSchema = yup.object().shape({
    name: yup.string().required("Debes ingresar un usuario"),
    description: yup.string().required(),
    duration: yup.string().required(),
    expiration: yup.string().required(),
    video: yup.string(),
    img: yup.string(),
    available: yup.boolean().required(),
    capacity: yup.number().required(),
    document: yup.string(),
    creatorId:yup.number().required(),
    leadersIds:yup.string().required(),
   // leadersIds:yup.array().of(yup.number()).required(),
    organizationId:yup.number().required()
});