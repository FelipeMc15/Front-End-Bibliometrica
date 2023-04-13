import * as yup from "yup";
export const loginSchema = yup.object().shape({
    user: yup.string().email("Debes ingresar un email válido").required("Debes ingresar un usuario"),
    password: yup.string().required("Debes ingresar una contraseña")
  });