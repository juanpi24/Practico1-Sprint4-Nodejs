//==============================
//Controladores para superhéroes
//==============================
import {
    obtenerTodosLosSuperheroes, 
    obtenerPorId,
    agregarSuperheroes, 
    actualizarSuperheroes, 
    eliminarSuperheroesPorID
} from '../services/superheroesService.mjs';

//Obtener todos los superhéroes
 export async function obtenerTodosLosSuperheroesController(req, res) {
    try{
        const heroes= await obtenerTodosLosSuperheroes();
       // renderizar dashboard.ejs 
       res.render("pages/dashboard",{heroes});
    } catch(error){
         req.session.mensaje = {
         tipo: "error",
         texto: "Error al cargar Superhéroes"
    };
       res.redirect("/heroes/dashboard");
    }
 }

//Obtener un superhéroe por ID
export async function verSuperheroeController (req, res) {
  try {
    const idHeroe= req.params.id;
    const hero = await obtenerPorId(idHeroe);

    if (!hero) {
      req.session.mensaje = {
        tipo: "error",
        texto: "Superhéroe no encontrado"
      };
      return res.redirect("/heroes/dashboard");
    }

    res.render("pages/viewSuperhero", { hero });

  } catch (error) {
    req.session.mensaje = {
      tipo: "error",
      texto: "Error al cargar el perfil del Superhéroe"
    };
    res.redirect("/heroes/dashboard");
  }
};

// Agregar a la BD
export async function agregarSuperheroeController(req, res) {
        
    try {
      const nuevoheroe=req.body;
    // ✔ guardar en DB
      await agregarSuperheroes(nuevoheroe);

    // ✔ mensaje de sesión
    req.session.mensaje = {
      tipo: "success",
      texto: "Superhéroe agregado correctamente"
    };

   // ✔ redirigir
   res.redirect("/heroes/dashboard");

  } catch (error) {
         return res.render("pages/addSuperhero", {
             errores: [{ msg: "Error al guardar el superhéroe en la BD" }],
             hero: req.body
             });
           }
};

// Mostrar el formulario de edición
export async function mostrarFormularioEditar (req, res) {
    const idHeroe= req.params.id;
    const hero = await obtenerPorId(idHeroe);
           
  if (!hero) {
      req.session.mensaje = {
        tipo: "error",
        texto: "Superhéroe no encontrado"
      };
      return res.redirect("/heroes/dashboard");
    }

   res.render("pages/editSuperhero", {hero});
}

// Procesar la actualización de superhéroe
export async function actualizarSuperheroeController(req, res) {
      
  try {       const idHeroe= req.params.id;
              const nuevosDatos= req.body;
              const actualizado= await actualizarSuperheroes(idHeroe,nuevosDatos);
      
       if (!actualizado) {
            req.session.mensaje = {
                tipo: "error",
                texto: "El superhéroe no existe"
              };
              return res.redirect("/heroes/dashboard");
        }
    // ✔ mensaje de sesión
          req.session.mensaje = {
            tipo: "success",
            texto: "Superhéroe actualizado correctamente"
          };
   // ✔ redirigir
            res.redirect("/heroes/dashboard");
          } catch (error) {
                return res.render("pages/editSuperhero", {
                    errores: [{ msg: "Error al actualizar el superhéroe en la BD" }],
                    hero: req.body
                });
          }
}

//Eliminar superhéro por ID
export async function eliminarSuperheroePorIDController(req, res) {
    try {
         const idHeroe= req.params.id;
         const eliminado= await eliminarSuperheroesPorID(idHeroe);
       
    if (!eliminado) {
     req.session.mensaje = {
        tipo: "error",
        texto: "El superhéroe no existe"
      };
      return res.redirect("/heroes/dashboard");
    }

    req.session.mensaje = {
      tipo: "success",
      texto: "Superhéroe eliminado correctamente"
    };

    res.redirect("/heroes/dashboard");

  } catch (error) {
    req.session.mensaje = {
      tipo: "error",
      texto: "Error al eliminar el superhéroe"
    };
    res.redirect("/heroes/dashboard");
  }
};
        
   
    

