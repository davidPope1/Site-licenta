import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICursa } from '../cursa/cursa.component';
import { IAlimentare } from '../alimentari/alimentari.component';

@Component({
  selector: 'app-dialog-box-alimentare',
  templateUrl: './dialog-box-alimentare.component.html',
  styleUrls: ['./dialog-box-alimentare.component.scss']
})

export class DialogBoxAlimentareComponent implements OnInit {
  foods: IAlimentare[] = [
    {dataOra:'da',numarLitrii:'10', pretTotal:'da',pretUnitar:'da',id:'1'},    
    {dataOra:'da',numarLitrii:'10', pretTotal:'da',pretUnitar:'da',id:'2'},    
  ];

  action:string;
  local_data:any;

   constructor(
    public dialogRef: MatDialogRef<DialogBoxAlimentareComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IAlimentare) {
    // console.log(data);
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
