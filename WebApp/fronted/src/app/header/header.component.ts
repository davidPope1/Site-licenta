import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderStateService } from '../services/header-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private headerService: HeaderStateService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogout() {
    this.headerService.headerStatus.emit(false);
    this.router.navigate(['/login']);
  }
  onUpload() {
    this.router.navigate(['/upload']);
  }
  onCursa() {
    this.router.navigate(['/cursa']);
  }
  onDashBoard() {
    this.router.navigate(['/dashboard']);
  }
  onAlimentari(){
    this.router.navigate(['/alimentari']);
  }
  
}
