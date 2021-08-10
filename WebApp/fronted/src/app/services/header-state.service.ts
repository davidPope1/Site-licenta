import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderStateService {
  headerStatus: EventEmitter<boolean> = new EventEmitter<boolean>();

  // getHeadedStatus(): Observable<boolean> {}

  // toggle() {
  //   this.visible = !this.visible;
  //   if (this.visible) {
  //     this.open.emit(null);
  //   } else {
  //     this.close.emit(null);
  //   }
  // }
}
