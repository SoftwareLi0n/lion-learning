import express from 'express';
import facturacionRoutes from './features/facturacion/facturacion.routes';

const app = express();
app.use(express.json());

// Montamos el dominio en la API
app.use('/api/v1/facturacion', facturacionRoutes);

app.listen(3000, () => {
    console.log('🚀 API SunFast corriendo en el puerto 3000');
});