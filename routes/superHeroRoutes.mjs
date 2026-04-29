//=================================
//Rutas de la API para superhéroes
//=================================

import express from 'express';
const router= express.Router();

// Controladores
import {
    obtenerTodosLosSuperheroesController,
    verSuperheroeController,
    agregarSuperheroeController,
    mostrarFormularioEditar,
    actualizarSuperheroeController,
    eliminarSuperheroePorIDController
} from '../controllers/superheroesController.mjs';

// Middleware validaciones - lo colocamos en la ruta POST
import {validar} from '../middlewares/validationMiddleware.mjs'
import {reglasValidacion} from '../validations/heroValidation.mjs';

// // Middleware nnormalizar Array
import { normalizarArrays } from "../middlewares/normalizarArrayMiddleware.mjs"


// Mostrar vista principal
router.get("/", (req, res) => {
  res.render("pages/home");
});

// Vista Nosotros
router.get("/nosotros", (req, res) => {
  res.render("pages/nosotros");
});

// Vista Contacto
router.get("/contacto", (req, res) => {
  res.render("pages/contacto");
});

// Mostrar todos los Superhéroes
router.get('/dashboard', obtenerTodosLosSuperheroesController);

// Mostrar formulario Agregar
//router.get("/agregar", mostrarFormularioAgregar);
router.get("/agregar", (req, res) => {
   res.render("pages/addSuperhero", { errores: [], hero: {}});
});

// Agregar - Validaciones + POST
router.post(
    '/agregar', 
    normalizarArrays(["poderes", "aliados", "enemigos"]),
    reglasValidacion,   // 👈 mis reglas
    validar("pages/addSuperhero"), // 👈 misma vista
    agregarSuperheroeController); 

// Mostrar formulario Editar
router.get("/editar/:id", mostrarFormularioEditar);

// Editar - Validaciones + PUT
router.put(
    '/editarhero/:id', 
    normalizarArrays(["poderes", "aliados", "enemigos"]),
    reglasValidacion, // 👈 mis reglas
    validar("pages/editSuperhero"),  // 👈 misma vista 
    actualizarSuperheroeController);

// Mostrar Superhéroes por ID
router.get("/perfil/:id", verSuperheroeController);

// Eliminar Superhéroes por ID + DELETE
router.delete('/eliminar/:id', eliminarSuperheroePorIDController);

export default router;