import { Component, OnInit } from '@angular/core';
import { Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICarburant } from '../cursa/cursa.component';
import { IDriver } from '../dashboard/dashboard.component';

// export interface UsersData {
//   name: string;
//   id: number;
// }

export interface ICar {
  id: string;
  marca: string;
  model: string;
  numarInmatriculare: string;
  consumNormat: number;
  anFabricatie: number;
  tipCarburant: string;
  serieCaroserie: string;
  capacitateRezervor: number;
  categorie: string;
  endDataAsig: string;
  endDataItp: string;
  kilometriiRulati: number;
  startDataAsig:string;
  startDataItp: string;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  foods: ICarburant[] = [
    {name:'Diesel'},    
    {name:'Benzina'},    
    {name:'GPL'},    
    {name:'Hybrid'},    
    {name:'Electric'},    

  ];
  action:string;
  local_data:any;

   constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ICar) {
    console.log(data);
    this.local_data = {...data};
    this.action = this.local_data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit(): void {
  }

}
