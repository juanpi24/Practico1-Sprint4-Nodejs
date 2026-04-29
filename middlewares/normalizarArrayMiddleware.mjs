// middlewares/normalizarArrays.mjs

export const normalizarArrays = (campos = []) => {
  return (req, res, next) => {

    campos.forEach(campo => {

      let valor = req.body[campo];
    //if (!req.body[campo]) return;
    // Si no hay valor 👉 Lo convierte en array vacío
    if (!valor) {
        req.body[campo] = [];
        return;
      }

      // Si ya es array → limpiar
      if (Array.isArray(valor)) {
        req.body[campo] = valor
          .map(v => v.trim())
          .filter(Boolean);
      }

      // Si es string → convertir a array
      else if (typeof valor === "string") {
        req.body[campo] = valor
          .split(',')
          .map(v => v.trim())
          .filter(Boolean);
      }

    });

    next();
  };
};