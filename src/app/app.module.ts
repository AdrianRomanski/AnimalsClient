import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DogsComponent } from './animals/dogs/dogs.component';
import {CdkTableModule} from '@angular/cdk/table';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { EditDogComponent } from './animals/dogs/edit-dog/edit-dog.component';
import { DetailDogComponent } from './animals/dogs/detail-dog/detail-dog.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path : 'admin/dogs', component : DogsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DogsComponent,
    EditDogComponent,
    DetailDogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkTableModule,
    NgbModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
