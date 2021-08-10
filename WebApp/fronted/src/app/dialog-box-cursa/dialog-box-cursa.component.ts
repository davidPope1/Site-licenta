import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICursa } from '../cursa/cursa.component';
import { IDriver } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-dialog-box-cursa',
  templateUrl: './dialog-box-cursa.component.html',
  styleUrls: ['./dialog-box-cursa.component.scss']
})

export class DialogBoxCursaComponent implements OnInit {
  foods: IDriver[] = [
    {numePrenume:'da',categoriiPermis:'da', dataExpirarePermis:'da',cnp:'da',id:'1'},    
    {numePrenume:'nu',categoriiPermis:'da', dataExpirarePermis:'da',cnp:'da',id:'2'}
  ];

  action:string;
  local_data:any;

   constructor(
    public dialogRef: MatDialogRef<DialogBoxCursaComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ICursa) {
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
