import { body } from "express-validator";

// Definimos las reglas según la consigna - Validaciones para crear y actualizar
export const reglasValidacion = [

// 1) nombreSuperheroe debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60 
  body('nombreSuperHeroe')

  // Valida que el documento contiene el campo
    .notEmpty().withMessage("Nombre del superhéroe es requerido")

  // Validar que sea un string - Opcional
    .isString().withMessage("Nombre debe ser un string")  
  
    // Limpiar espacios antes de guardar o validar
    .trim()

    // Escapa caracteres HTML
    .escape()

  //valida que la longitud de una cadena (string) tenga entre 3 y 60 caracteres inclusive
    .isLength({ min: 3, max: 60 }).withMessage("Nombre debe tener entre 3 y 60 caracteres"),


  // 2) nombreReal debe validarse que sea requerido, no tenga espacios en blanco(trim), una longitud minima de 3 caracteres y una longitud maxima de 60
  body('nombreReal')

  // Valida que el documento contiene el campo
    .notEmpty().withMessage("Nombre real es requerido")
  
  // Validar que sea un string - Opcional
    .isString().withMessage("Nombre real debe ser un string")  
  
  // Limpiar espacios antes de guardar o validar
    .trim()
  
  // Escapa caracteres HTML
    .escape()

  //valida que la longitud de una cadena (string) tenga entre 3 y 60 caracteres inclusive  
    .isLength({ min: 3, max: 60 }).withMessage("Nombre Real debe tener entre 3 y 60 caracteres"),

// 3) edad debe validarse que sea requerido, que sea un numero, no tenga espacios en blanco(trim), valor minimo 0 (no admite edad negativa)  
  body('edad')

  // Valida que el documento contiene el campo
    .exists().withMessage("Edad es requerida")

  // Valida que la edad sea 1 o positiva
    .isInt({ min: 1 }).withMessage("La edad debe ser un número entero mayor o igual a 1"),

// 4) poderes debe validarse que sea requerido, que sea un array de string cuyo tamaño no sea 0, cada elemento no tenga espacios en blanco, cada elemento una longitud minima de 3 caracteres y una longitud maxima de 60  
  body('poderes')
  
  // Valida que el documento contiene el campo
     .notEmpty().withMessage("Poderes es requerido")

  // Valida que sea un array con al menos un elemento   
    .isArray({ min: 1 }).withMessage("Poderes debe ser un array con al menos un elemento"),
  
  // Validar cada elemento del array
  body('poderes.*')
  // Valida que sea un string - Opcional
    .isString().withMessage("Cada poder debe ser un string")

  // Limpiar espacios antes de guardar o validar
    .trim()

  //valida que la longitud de una cadena (string) tenga entre 3 y 60 caracteres inclusive  
    .isLength({ min: 3, max: 60 }).withMessage("Cada poder debe tener entre 3 y 60 caracteres"), 
];


// Validacion resumida
// export const heroValidation = [
//     body("nombreSuperHeroe").notEmpty().withMessage("Nombre requerido"),
//     body("nombreReal").notEmpty().withMessage("Nombre real requerido"),
//     body("edad").isInt({ min: 0 }).withMessage("Edad inválida"),
//     body("planetaOrigen").notEmpty().withMessage("Planeta requerido"),
// ];