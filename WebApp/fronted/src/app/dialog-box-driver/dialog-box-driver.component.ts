import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDriver } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-dialog-box-driver',
  templateUrl: './dialog-box-driver.component.html',
  styleUrls: ['./dialog-box-driver.component.scss']
})
export class DialogBoxDriverComponent implements OnInit {

  action:string;
  local_data:any;

   constructor(
    public dialogRef: MatDialogRef<DialogBoxDriverComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: IDriver) {
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
