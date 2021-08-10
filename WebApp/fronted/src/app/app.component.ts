import { Component, EventEmitter, Output } from '@angular/core';
import { HeaderStateService } from './services/header-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fsdProject';

  showHeader = true;
  subscription = null;

  constructor(private headerService: HeaderStateService) {}

  ngOnInit(): void {
    this.subscription = this.headerService.headerStatus.subscribe((data) => {
      this.showHeader = data;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
