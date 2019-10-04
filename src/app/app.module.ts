import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
//import {ApiService} from './api.service';

import { 
 
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

import { DialogBoxxComponent } from './dialog-boxx/dialog-boxx.component';



@NgModule({

  declarations: [
    AppComponent,
    DialogBoxxComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule, 
    MatDialogModule, 
    MatFormFieldModule,
     MatInputModule,
    MatButtonModule,
    HttpClientModule,
    
  ],

  entryComponents: [
    DialogBoxxComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
