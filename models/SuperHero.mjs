//===================================
//Modelos de datos - Modelo SuperHero
//===================================

//Importar mongoose
import mongoose from "mongoose";

//Crea Esquema y modelo de la BD Superhéroes
const superheroSchema= new mongoose.Schema({
    nombreSuperHeroe:{type:String, required:true},
    nombreReal:{type:String, required:true},
    edad:{type:Number, min:0},
    planetaOrigen:{type:String, default:'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creator: String,
    createdAt: {type: Date, default: Date.now},
});
const superHero= mongoose.model('SuperHero', superheroSchema,'Grupo-12');
export default superHero;


