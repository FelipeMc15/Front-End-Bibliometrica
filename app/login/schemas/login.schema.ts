import * as yup from "yup";
export const regexForPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
export const loginSchema = yup.object().shape({
    email: yup.string().email("Debes ingresar un email válido").required("Debes ingresar un usuario"),
    password: yup.string().matches(regexForPassword,"Debe ingresar un min. de 8 dígitos, una mayúscula, una minúscula y un carácter especial").required("Debes ingresar una contraseña")
  });