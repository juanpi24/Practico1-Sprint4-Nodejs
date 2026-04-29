//==================================
//Archivo principal de la aplicación
//==================================
import express from 'express';
import session from "express-session";
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import flashMiddleware from './middlewares/flashMiddleware.mjs';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import methodOverride from "method-override";

// Servidor
const app = express();
// Usa el puerto de la variable de entorno o 3002 por defecto
const PORT = process.env.PORT || 3002;

// Middleware para parsear JSON
//app.use(express.json());

// Middleware para parsear datos de formularios - (Solucion Error req.body undefined)
app.use(express.urlencoded({ extended: true }));

// Configurar EJS como Motor de vistas (pnatillas)
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Configurar express-ejs-layouts
app.use(expressLayouts);
app.set('layout','layouts/main');  // Archivo base de layaout

// Servir archivos estásticos
app.use(express.static(path.resolve('./public')));

// Configurar sesiones
app.use(session({
  secret: "supersecret",
  resave: false,
  saveUninitialized: true
}));

// Middleare global para registrar solicitudes
const loggerMiddleware = (req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next(); //pasa el control al siguiente middleware o ruta
};
app.use(loggerMiddleware);

// mensajes globales
app.use(flashMiddleware);

// Configurar method-override
app.use(methodOverride("_method"));

// Conexión a MongoDB
connectDB();

// Configuración de rutas
app.use('/heroes', superHeroRoutes);
// redirección inicial
app.get("/", (req, res) => res.redirect("/heroes"));

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).render("pages/404", { 
    title: "Página No Encontrada",
    url: req.originalUrl 
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
