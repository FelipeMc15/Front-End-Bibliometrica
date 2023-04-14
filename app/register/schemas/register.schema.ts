import { regexForPassword } from "app/login/schemas/login.schema";
import * as yup from "yup";
const regexForNames = /^([^0-9_-]*)$/;
export const registerSchema = yup.object().shape({
  firstName: yup.string().matches(regexForNames, "El campo nombre no puede contener números").required("Debes ingresar un nombre"),
    lastName: yup.string().matches(regexForNames, "El campo nombre no puede contener números").required("Debes ingresar un apellido"),
    email: yup.string().email("Debes ingresar un email válido").required("Debes ingresar un usuario"),
    password: yup.string().matches(regexForPassword,"Debe ingresar un min. de 8 dígitos, una mayúscula, una minúscula y un carácter especial").required("Debes ingresar una contraseña")
  });