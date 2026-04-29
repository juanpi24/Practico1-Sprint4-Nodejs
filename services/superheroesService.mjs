//=======================================
//Lógica de negocio - Servicios SuperHero
//=======================================

import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

//Obtener todos los superhéroes
export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodos();
}

//Obtener un superhéroe por ID
export async function obtenerPorId(idHeroe) {
    return await SuperHeroRepository.obtenerPorId(idHeroe);
}

//Agregar nuevo superheroe
export async function agregarSuperheroes(nuevoheroe) {
    return await SuperHeroRepository.agregarSuperheroes(nuevoheroe);
}

//Actualizar superhéroe por ID
export async function actualizarSuperheroes(idHeroe,nuevosDatos) {
    return await SuperHeroRepository.actualizarSuperheroes(idHeroe,nuevosDatos);
}

//Eliminar superhéroe por ID
export async function eliminarSuperheroesPorID(idHeroe) {
    return await SuperHeroRepository.eliminarSuperheroesPorID(idHeroe);
}
