import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { CursaComponent } from './cursa/cursa.component';


// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule} from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { from } from 'rxjs';
import { DialogBoxDriverComponent } from './dialog-box-driver/dialog-box-driver.component';
import { MatSortModule } from '@angular/material/sort';
import { DialogBoxCursaComponent } from './dialog-box-cursa/dialog-box-cursa.component';
import { GrafComponent } from './statistici/graf/graf.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DialogBoxAlimentareComponent } from './dialog-box-alimentare/dialog-box-alimentare.component';
import { AlimentareComponent } from './alimentari/alimentari.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UploadComponent,
    CursaComponent,
    AlimentareComponent,
    HeaderComponent,
    ModalComponent,
    DialogBoxComponent,
    DialogBoxDriverComponent,
    DialogBoxCursaComponent,
    DialogBoxAlimentareComponent,
    GrafComponent
  ],
  imports: [
    NgApexchartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
