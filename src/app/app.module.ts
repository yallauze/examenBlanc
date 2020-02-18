import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'; 
import { ToastrModule } from 'ngx-toastr';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component'; 
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule }   from '@angular/forms'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetailComponent } from './components/detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
