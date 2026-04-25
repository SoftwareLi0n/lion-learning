import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-item-list',
    standalone: true,
    imports: [],
    templateUrl: './item-list.component.html',
    styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
    // 📥 De Padre a Hijo
    @Input() titulo: string = '';
    @Input() items: any[] = [];

    // 📤 De Hijo a Padre
    @Output() onDeleteItem = new EventEmitter<number>();

    eliminar(id: number) {
        this.onDeleteItem.emit(id);
    }
}
