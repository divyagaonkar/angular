
 import { Component, ViewChild } from '@angular/core';
 
 import { MatDialog, MatTable } from '@angular/material';
 import { DialogBoxxComponent } from './dialog-boxx/dialog-boxx.component';

 

 //import { FormBuilder, FormGroup, Validators ,NgForm } from '@angular/forms';  
  
 export interface UsersData {
   name: string;
   type: string;
 }
  
 const ELEMENT_DATA: UsersData[] = [
   {name: 'divya', type: 'Admin '},
   
 ];
 @Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
 })
 export class AppComponent {
   displayedColumns: string[] = [ 'name','type', 'action'];
   dataSource = ELEMENT_DATA;
   
  
   @ViewChild(MatTable,) table: MatTable<any>;
  
   constructor(public dialog: MatDialog) {}
  
   openDialog(action,obj) {
     obj.action = action;
     const dialogRef = this.dialog.open(DialogBoxxComponent, {
       width: '250px',
       data:obj
     });
  
     dialogRef.afterClosed().subscribe(result => {
       if(result.event == 'Add'){
         this.addRowData(result.data);
       }else if(result.event == 'Update'){
         this.updateRowData(result.data);
       }else if(result.event == 'Delete'){
         this.deleteRowData(result.data);
       }
     });
   }
  
   addRowData(row_obj){
     //var d = new Date();
     this.dataSource.push({
       name:row_obj.name,
       type:row_obj.type
     });
     this.table.renderRows();
     
   }
   updateRowData(row_obj){
     this.dataSource = this.dataSource.filter((value,key)=>{
       if(value.name == row_obj.name){
         value.name == row_obj.name;
         value.type = row_obj.type;
         
       }
       //this.table.renderRows();
       return true;
     });
   }
   deleteRowData(row_obj){
     this.dataSource = this.dataSource.filter((value,key)=>{
       return value.name != row_obj.name;
     });
   }
  
  
 }
  