//==============================================
//Capa de persistencia - Interfaz CRUD SuperHero
//==============================================

//Clase para implementar la interfaz
export default class IRepository{
    
    obtenerTodos(){
        throw new Error("Método 'obtenerTodos()' no implementado");
    }
    
    obtenerPorId(idHeroe){
        throw new Error("Método 'obtenerPorId()' no implementado");
    }
        
    agregarSuperheroes(nuevoheroe){
        throw new Error("Método 'agregarSuperheroes()' no implementado");
    }
   actualizarSuperheroes(idHeroe,datosActualizados){
        throw new Error("Método 'actualizarSuperheroes()' no implementado");
    }
    eliminarSuperheroesPorID(idHeroe){
        throw new Error("Método 'eliminarSuperheroesPorID()' no implementado");
    }
}