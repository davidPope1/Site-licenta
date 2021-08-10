import { Component, OnInit, ElementRef } from '@angular/core';
import  {AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { FunctionExpr } from '@angular/compiler';
import { MasinaService } from '../services/masina.service';
import {MatDialog} from '@angular/material/dialog';

import { SoferService } from '../services/sofer.service';
import { ModalComponent } from '../modal/modal.component';
import { AddDialogComponent } from '../dialogs/add/add.dialog.component';
import { Car } from '../model/car';

import { MatTable } from '@angular/material/table';

import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { DialogBoxDriverComponent } from '../dialog-box-driver/dialog-box-driver.component';

export interface IDriver {
  id: string
  categoriiPermis: string
  cnp: string
  dataExpirarePermis: string
  numePrenume: string
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  displayedColumnsDriver: string[] = ['select', 'category', 'cnp', 'licenseDate', 'name', 'view', 'action']; 
  selectionDriver = new SelectionModel<IDriver>(true, []);
  dataSourceDriver = new MatTableDataSource<IDriver>();


  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginatorDriver: MatPaginator;
  @ViewChild(MatSort, {static: true}) sortDriver: MatSort;

  constructor(
    private SoferService : SoferService,
    public dialog: MatDialog
  ) {
    this.SoferService.getSoferi().subscribe(data => {
      console.log('Populate!')
      if (data != null) {
        this.dataSourceDriver = new MatTableDataSource<IDriver>(data);
        this.dataSourceDriver.paginator = this.paginatorDriver;
        this.dataSourceDriver.sort = this.sortDriver;
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceDriver.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceDriver.paginator) {
      this.dataSourceDriver.paginator.firstPage();
    }
  }

  openDialogDriver(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxDriverComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowDataDriver(result.data);
      }else if(result.event == 'Update'){
        this.updateRowDataDriver(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowDataDriver(result.data);
      }
    });
  }

  addRowDataDriver(row_obj){
    var d = new Date();

     var datatemp : IDriver = {
  
      id: d.getTime().toString(),
      categoriiPermis: row_obj.categoriiPermis,
      cnp: row_obj.cnp,
      dataExpirarePermis: row_obj.dataExpirarePermis,
      numePrenume: row_obj.numePrenume
    };

    this.dataSourceDriver.data.push(datatemp); 
    console.log(datatemp) 
    this.SoferService.addSofer(datatemp); 
    this.table.renderRows();
    
  }

  updateRowDataDriver(row_obj){
    var datatemp : IDriver = {
      id: row_obj.id,
      categoriiPermis: row_obj.categoriiPermis,
      cnp: row_obj.cnp,
      dataExpirarePermis: row_obj.dataExpirarePermis,
      numePrenume: row_obj.numePrenume
    };

    this.dataSourceDriver = new MatTableDataSource<IDriver>(this.dataSourceDriver.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.categoriiPermis = datatemp.categoriiPermis;
        value.cnp= datatemp.cnp;
        value.dataExpirarePermis=datatemp.dataExpirarePermis;
        value.numePrenume= datatemp.numePrenume;
        this.SoferService.updateSofer(datatemp)
      }
      return true;
      })
    );
    
    this.table.renderRows();

  }

  deleteRowDataDriver(row_obj){
    
    this.dataSourceDriver = new MatTableDataSource<IDriver>(
      this.dataSourceDriver.data.filter((value,key)=>{
        if (value.id == row_obj.id) {
          this.SoferService.deleteSofer(row_obj.id)
          return false
        }
        return true
      })
    );
    this.table.renderRows();
  }
  


  ngOnInit(): void {}



  ngAfterViewInit() {
    this.dataSourceDriver.paginator = this.paginatorDriver;
    this.dataSourceDriver.sort = this.sortDriver;
  }

  curentCars: string

  showVal(id: string){
    console.log(id)
    
    this.SoferService.getMasiniForSoferi(id).subscribe(data => {
      console.log('Get Masini for Sofer!')
      if (data != null) {
        // console.log(data[0]["numarInmatriculare"])
        this.curentCars=data

        const dialogRef = this.dialog.open(ModalComponent, {
          width: '250px',
          data: this.curentCars
        },);
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });

      }
    })

    // const dialogRef = this.dialog.open(ModalComponent, {
    //   width: '250px',
    //   data: this.curentCars[0]
    // },);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selectionDriver.selected.length;
    const numRows = this.dataSourceDriver.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selectionDriver.clear() :
        this.dataSourceDriver.data.forEach(row => this.selectionDriver.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IDriver): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selectionDriver.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}

