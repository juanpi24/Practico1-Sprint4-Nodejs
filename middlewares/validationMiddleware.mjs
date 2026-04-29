import { validationResult } from "express-validator";

export const validar = (vista) => {
  return (req, res, next) => {
    const errores = validationResult(req);
// Verifica si hay errores 
    if (!errores.isEmpty()) {
      // envia a la vista EJS definida en el controlador
      return res.status(400).render(vista, {
        errores: errores.array(),

        // 👇 datos del formulario (sirve para no perder lo escrito)
        hero: {
          ...req.body,
          _id: req.params.id || null
        },

        // 👇 por si quiero usar el id separado en la vista
        //id: req.params.id || null
      });
    }
    // Procesar datos si no hay errores..
    next();
  };
};