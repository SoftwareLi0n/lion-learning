import { SqlServerRepositorio, EmailNotificador } from './infraestructura';
import { IgvNacional, ExoneradoSelva } from './impuestos';
import { ProcesadorFacturacion } from './servicio';
import { Boleta, Factura } from './models';

console.log("=== INICIANDO MOTOR DE FACTURACIÓN ===\n");

// 1. Instanciamos las herramientas físicas
const miBaseDeDatos = new SqlServerRepositorio();
const miCorreo = new EmailNotificador();
const impuestoNacional = new IgvNacional();
const impuestoSelva = new ExoneradoSelva();

// 2. Armamos nuestro Servicio inyectándole las dependencias
const motorLima = new ProcesadorFacturacion(miBaseDeDatos, miCorreo, impuestoNacional);
const motorIquitos = new ProcesadorFacturacion(miBaseDeDatos, miCorreo, impuestoSelva);

// 3. Creamos datos de prueba
const nuevaFactura = new Factura(1000);
const nuevaBoleta = new Boleta(50);

// 4. ¡A procesar!
console.log("--- Procesando Factura en Lima ---");
motorLima.procesar(nuevaFactura);

console.log("\n--- Procesando Boleta en Iquitos ---");
motorIquitos.procesar(nuevaBoleta);