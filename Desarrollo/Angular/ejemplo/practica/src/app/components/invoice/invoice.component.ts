import { Component } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
    selector: 'app-invoice',
    standalone: true,
    imports: [ItemListComponent],
    templateUrl: './invoice.component.html',
    styleUrl: './invoice.component.scss'
})
export class InvoiceComponent {
    listaProductos = [
        { id: 1, descripcion: 'Servicio Cloud', precio: 100 },
        { id: 2, descripcion: 'Soporte Técnico', precio: 50 }
    ];
    totalGlobal = 0;

    constructor(private invoiceService: InvoiceService) { }

    ngOnInit() {
        // Nos suscribimos al servicio para reaccionar a cambios en el total
        this.invoiceService.total$.subscribe(valor => this.totalGlobal = valor);
        this.calcularYNotificar();
    }

    removerProducto(id: number) {
        this.listaProductos = this.listaProductos.filter(p => p.id !== id);
        this.calcularYNotificar();
    }

    private calcularYNotificar() {
        const nuevoTotal = this.listaProductos.reduce((acc, p) => acc + p.precio, 0);
        // Notificamos al servicio para que cualquier otro componente se entere
        this.invoiceService.actualizarTotal(nuevoTotal);
    }
}
