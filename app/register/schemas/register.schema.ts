import * as yup from "yup";
const regexForNames = /^([^0-9_-]*)$/;
export const registerSchema = yup.object().shape({
  firstName: yup.string().matches(regexForNames, "El campo nombre no puede contener números").required("Debes ingresar un nombre"),
    lastName: yup.string().matches(regexForNames, "El campo nombre no puede contener números").required("Debes ingresar un apellido"),
    email: yup.string().email("Debes ingresar un email válido").required("Debes ingresar un usuario"),
    password: yup.string().min(8,"La contraseña debe tener mínimamente 8 dígitos").required("Debes ingresar una contraseña"),
  });