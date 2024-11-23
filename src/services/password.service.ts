import { ValidacionClave } from '../types/password-types';
import * as passwordRules from '../validators/password-rules';

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const validaciones = [
    passwordRules.tieneMayusculasYMinusculas(clave),
    passwordRules.tieneNumeros(clave),
    passwordRules.tieneCaracteresEspeciales(clave),
    passwordRules.tieneLongitudMinima(clave),
    passwordRules.tieneNombreUsuario(nombreUsuario, clave),
    passwordRules.tienePalabrasComunes(clave, commonPasswords)
  ];

  const primerError = validaciones.find(validacion => !validacion.esValida);

  return {
    esValida: !primerError,
    error: primerError?.error
  };
};