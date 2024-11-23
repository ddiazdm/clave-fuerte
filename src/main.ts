import "./style.css";
import { validarClave } from './services/password.service';
import { commonPasswords } from './constants/passwords-constants';

const resultado = validarClave("usuario", "ddd@ssDo3", commonPasswords);
console.log("Es valida tras la prueba ¿? ", resultado);