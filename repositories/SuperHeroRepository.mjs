import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {

    //Obtener todos los superhéroes
    async obtenerTodos() {
        return await SuperHero.find();
    }

 //Obtener superhéroe por ID
    async obtenerPorId(idHeroe) {
        return await SuperHero.findById(idHeroe);
    }

   //Agregar nuevo superheroe
    async agregarSuperheroes(nuevoheroe) {
        return await SuperHero.insertOne(nuevoheroe);
    }


   //Actualizar superhéroe por ID
    async actualizarSuperheroes(idHeroe,nuevosDatos) {
        // El tercer parámetro { new: true } asegura que devuelva el documento actualizado
        // 1. ID del documento
        // 2. Datos a actualizar
        // 3. { new: true } devuelve el documento actualizado
        return await SuperHero.findByIdAndUpdate(
            idHeroe, 
            { $set: nuevosDatos }, // Uso de $set recomendado 
    );
    }

   //Eliminar superhéroe por ID
    async eliminarSuperheroesPorID(idHeroe) {
        return await SuperHero.findByIdAndDelete(idHeroe);
    }

}

export default new SuperHeroRepository();