//=================================
//Configuración de la base de datos
//=================================

//Importar mongoose
import mongoose from 'mongoose';

//Conexión a la base de datos MongoDB
export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://grupo-12:grupo-12@cluster0.blryo.mongodb.net/NodeMod3Cohorte5');
        console.log('Conexión éxitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
}