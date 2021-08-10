import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlimentareComponent } from './alimentari/alimentari.component';
import { CursaComponent } from './cursa/cursa.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from './login/login.component';
import { GrafComponent } from './statistici/graf/graf.component';
import { UploadComponent } from './upload/upload.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cursa', component: CursaComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'graph', component: GrafComponent  },
  { path: 'alimentari', component: AlimentareComponent  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
