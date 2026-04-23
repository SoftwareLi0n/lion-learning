import { Router } from 'express';
import { SqlFacturacionRepository } from './repositories/sql-facturacion.repository';
import { FacturacionService } from './services/facturacion.service';
import { FacturacionController } from './controllers/facturacion.controller';

const router = Router();

// 1. Instanciamos la infraestructura concreta (Nuestra base de datos de verdad)
const sqlRepo = new SqlFacturacionRepository();

// 2. Inyectamos la base de datos al Servicio
const facturacionService = new FacturacionService(sqlRepo);

// 3. Inyectamos el Servicio al Controlador
const facturacionController = new FacturacionController(facturacionService);

// 4. Conectamos la ruta al método del controlador
router.post('/emitir-factura', facturacionController.emitirFactura);

export default router;