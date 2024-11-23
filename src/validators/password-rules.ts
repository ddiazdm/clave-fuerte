import { ValidacionClave } from '../types/password-types';
import {
    CARACTERES_ESPECIALES_REGEXP,
    NUMEROS_REGEXP,
    MAYUSCULAS_REGEXP,
    MINUSCULAS_REGEXP,
    LONGITUD_MINIMA_PASSWORD
} from '../constants/passwords-constants';

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
    const tieneMayusculas = MAYUSCULAS_REGEXP.test(clave);
    const tieneMinusculas = MINUSCULAS_REGEXP.test(clave);

    return {
        esValida: tieneMayusculas && tieneMinusculas,
        error: tieneMayusculas && tieneMinusculas
            ? undefined
            : "La clave debe de tener mayúsculas y minúsculas"
    };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
    const tieneNumero = NUMEROS_REGEXP.test(clave);

    return {
        esValida: tieneNumero,
        error: tieneNumero ? undefined : "La clave debe de tener números"
    };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
    const tieneCaracterEspecial = CARACTERES_ESPECIALES_REGEXP.test(clave);

    return {
        esValida: tieneCaracterEspecial,
        error: tieneCaracterEspecial
            ? undefined
            : "La clave debe de tener caracteres especiales"
    };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {

    const tieneLongitudMinima = clave.length >= LONGITUD_MINIMA_PASSWORD;

    return {
        esValida: tieneLongitudMinima,
        error: tieneLongitudMinima
            ? undefined
            : `La clave debe de tener al menos ${LONGITUD_MINIMA_PASSWORD} caracteres`
    };
};



export const tieneNombreUsuario = (
    nombreUsuario: string,
    clave: string
): ValidacionClave => {
    const tieneNombreUsuario = clave.toLowerCase().includes(nombreUsuario.toLowerCase());

    return {
        esValida: !tieneNombreUsuario,
        error: tieneNombreUsuario
            ? "La clave no puede contener el nombre de usuario"
            : undefined
    };
};

export const tienePalabrasComunes = (clave: string, palabrasComunes: string[]): ValidacionClave => {
    
    const tienePalabraComun = palabrasComunes.some(palabra =>
        clave.toLowerCase().includes(palabra.toLowerCase())
    );

    return {
        esValida: !tienePalabraComun,
        error: tienePalabraComun
            ? "La clave no puede contener palabras comunes"
            : undefined
    };
};