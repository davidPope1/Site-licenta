import { Component, OnInit,Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ICar } from '../dialog-box/dialog-box.component';

export interface DialogData {
  nrMatriculare: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{

  // constructor(
  //   public dialogRef: MatDialogRef<ModalComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  public local_data:any;

    constructor(
      public dialogRef: MatDialogRef<ModalComponent>,
      //@Optional() is used to prevent error if no data is passed
      @Optional() @Inject(MAT_DIALOG_DATA) public data: ICar) {
      console.log(data.numarInmatriculare);
      this.local_data = data;
    }


  onNoClick(): void {
    this.dialogRef.close();
  }
 

  ngOnInit(): void {
  }

}
