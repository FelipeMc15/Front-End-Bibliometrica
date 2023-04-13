import * as yup from "yup";
const regexForNames = /^([^0-9_-]*)$/;
export const registerSchema = yup.object().shape({
    name: yup.string().matches(regexForNames, "El campo nombre no puede contener números").required("Debes ingresar un nombre"),
    lastname: yup.string().matches(regexForNames, "El campo nombre no puede contener números").required("Debes ingresar un apellido"),
    user: yup.string().email("Debes ingresar un email válido").required("Debes ingresar un usuario"),
    password: yup.string().required("Debes ingresar una contraseña"),
  });