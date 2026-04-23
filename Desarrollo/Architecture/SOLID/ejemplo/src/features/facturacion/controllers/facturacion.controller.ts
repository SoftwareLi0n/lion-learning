import { Request, Response } from 'express';
import { FacturacionService } from '../services/facturacion.service';
import { Factura, Boleta } from '../models/comprobante.model';

export class FacturacionController {
    
    // 💉 El controlador también exige su servicio inyectado
    constructor(private facturacionService: FacturacionService) {}

    emitirFactura = async (req: Request, res: Response) => {
        try {
            const { ruc, total } = req.body;
            
            // Instanciamos los datos (No dependencias, DATOS)
            const nuevaFactura = new Factura(total, ruc);
            
            // Pasamos al servicio
            const resultado = await this.facturacionService.procesarEmision(nuevaFactura);

            res.status(200).json({ success: true, data: resultado });
        } catch (error: any) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}