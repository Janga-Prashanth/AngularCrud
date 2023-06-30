import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';          //to use material toolbar
import {MatIconModule} from '@angular/material/icon';                 //to use material icons
import {MatButtonModule} from '@angular/material/button';           //to use material buttons
import { AddMobileComponent } from './add-mobile/add-mobile.component';        //add-mobile dialog
import {MatDialogModule} from '@angular/material/dialog';             //to use material dialog(moal in bootstrap)
import {MatFormFieldModule} from '@angular/material/form-field';              //to use material forms
import {MatInputModule} from '@angular/material/input';                    //to use material inputs
import {MatSelectModule} from '@angular/material/select';                    //to use material dropdown
import {MatDatepickerModule} from '@angular/material/datepicker';           //to use material datepicker
import {MatNativeDateModule} from '@angular/material/core';           //to use material datepicker
import {MatRadioModule} from '@angular/material/radio';                //to use material radio buttons
import { FormsModule, ReactiveFormsModule } from '@angular/forms';        //to use reactive module forms
import { HttpClientModule } from '@angular/common/http';            //to use http services
import {MatTableModule} from '@angular/material/table';                      //to use material tables
import {MatPaginatorModule} from '@angular/material/paginator';         //to add paginator to the table
import {MatSort, MatSortModule} from '@angular/material/sort';                 //to add sorting to the table
       

@NgModule({
  declarations: [
    AppComponent,
    AddMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
