import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-item-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
    // 📥 De Padre a Hijo
    @Input() titulo: string = '';
    @Input() items: any[] = [];

    // 📤 De Hijo a Padre
    @Output() onDeleteItem = new EventEmitter<IResEliminar>();

    eliminar(id: number) {
        // Emit solo puede enviar "1" valor
        this.onDeleteItem.emit({ id, mensaje: 'eliminado' });
    }
}

export interface IResEliminar {
    id: number;
    mensaje: string;
}