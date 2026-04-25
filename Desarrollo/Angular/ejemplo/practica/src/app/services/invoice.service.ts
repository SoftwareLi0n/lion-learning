// invoice.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InvoiceService {
    // El "Subject" mantiene el valor y lo emite a quien se suscriba
    private totalSubject = new BehaviorSubject<number>(0);
    total$ = this.totalSubject.asObservable();

    actualizarTotal(nuevoTotal: number) {
        this.totalSubject.next(nuevoTotal);
    }
}