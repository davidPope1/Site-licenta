import { Component, OnInit, ElementRef } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
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
  
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

export type ChartOptionsLineChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
// import {Issue} from './models/issue';
// import {DataSource} from '@angular/cdk/collections';
// import {AddDialogComponent} from './dialogs/add/add.dialog.component';
// import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
// import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';
// import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
// import {map} from 'rxjs/operators';


// export interface ICar {
//   id: string;
//   brand: string;
//   model: string;
//   licensePlate: string;
//   consumption: number;
//   year: number;
//   fuel: string;
//   serial: string;
//   gasTank: number;
//   category: string;
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



export interface IDriver {
  id: string
  categoriiPermis: string
  cnp: string
  dataExpirarePermis: string
  numePrenume: string
}

// const data: ICar[] = [
//   {id: '0', brand: 'Dacia', model: "Logan", licensePlate: "B-152-GAS", consumption: 6.5, year: 2007, fuel: "GAS + LPG", serial: "UU1LSDAAH33004872", gasTank: 50, category: "B"},
//   {id: '1', brand: 'Dacia', model: "Docker", licensePlate: "B-152-GAS", consumption: 6.5, year: 2005, fuel: "GAS", serial: "UU1LSDAAH33004846", gasTank: 50, category: "B"},
//   {id: '2', brand: 'Dacia', model: "Sandero", licensePlate: "B-152-GAS", consumption: 6.5, year: 2015, fuel: "DIESEL", serial: "UU1LSDAAH33004176", gasTank: 50, category: "B"},
//   {id: '3', brand: 'Dacia', model: "Logan Van", licensePlate: "B-152-GAS", consumption: 9.5, year: 2010, fuel: "GAS", serial: "UU1LSDAAH33002376", gasTank: 50, category: "B"},
//   {id: '4', brand: 'Dacia', model: "Logan MCV", licensePlate: "B-152-GAS", consumption: 6.5, year: 2012, fuel: "GAS + LPG", serial: "UU1LSDAAH33004576", gasTank: 50, category: "B"},
//   {id: '5', brand: 'Dacia', model: "Docker", licensePlate: "B-152-GAS", consumption: 6.5, year: 2020, fuel: "DIESEL", serial: "UU1LSDAAH33004816", gasTank: 50, category: "B"},
//   {id: '6', brand: 'Dacia', model: "Logan", licensePlate: "B-152-GAS", consumption: 6.5, year: 2018, fuel: "GAS + LPG", serial: "UU1LSDAAH33004826", gasTank: 50, category: "B"},
//   {id: '7', brand: 'Dacia', model: "Logan", licensePlate: "B-152-GAS", consumption: 6.5, year: 2016, fuel: "GAS", serial: "UU1LSDAAH33004866", gasTank: 50, category: "B"},
//   {id: '8', brand: 'Dacia', model: "Docker", licensePlate: "B-152-GAS", consumption: 5.5, year: 2006, fuel: "DIESEL", serial: "UU1LSDAAH33004856", gasTank: 50, category: "B"},
//   {id: '9', brand: 'Dacia', model: "Logan", licensePlate: "B-152-GAS", consumption: 6.5, year: 2017, fuel: "GAS + LPG", serial: "UU1LSDAAH33004871", gasTank: 50, category: "B"},
// ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,AfterViewInit {

  displayedColumns: string[] = ['select', 'brand', 'model', 'licensePlate', 'consumption', 'year', 'fuel', 'serial', 'gasTank', 'category', 'action'];
  // data = DashboardService.getData()
  // dataSource = new MatTableDataSource<ICar>(data);
  selection = new SelectionModel<ICar>(true, []);
  dataSource = new MatTableDataSource<ICar>();


  displayedColumnsDriver: string[] = ['select', 'category', 'cnp', 'licenseDate', 'name', 'view', 'action']; 
  selectionDriver = new SelectionModel<IDriver>(true, []);
  dataSourceDriver = new MatTableDataSource<IDriver>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  @ViewChild(MatPaginator, {static: true}) paginatorDriver: MatPaginator;
  @ViewChild(MatSort, {static: true}) sortDriver: MatSort;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  series = []

  constructor(
    private masinaService: MasinaService,
    private SoferService : SoferService,
    public dialog: MatDialog
  ) {
    this.masinaService.getMasini().subscribe(data => {
      console.log('Populate!')
      if (data != null) {
        this.dataSource = new MatTableDataSource<ICar>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
    this.SoferService.getSoferi().subscribe(data => {
      console.log('Populate!')
      if (data != null) {
        this.dataSourceDriver = new MatTableDataSource<IDriver>(data);
        // this.dataSourceDriver.paginator = this.paginatorDriver;
        this.dataSourceDriver.sort = this.sortDriver;
      }
    })

    this.masinaService.getNumarCarburantMasini().subscribe(data => {
      console.log('Populate!')
      console.log(data)
      
      if (data != null) {
        data.forEach(element => {
          this.series.push(element)

        });
      }
    })


    this.chartOptions = {
      series: this.series,
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["GPL", "Benzina", "Diesel", "Electric", "Hybrid"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceDriver.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceDriver.paginator) {
      this.dataSourceDriver.paginator.firstPage();
    }
  }

  applyFilterCar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
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

    var d = new Date();

     var datatemp : ICar = {
      id: d.getTime().toString(),
      marca: row_obj.marca,
      model: row_obj.model,
      numarInmatriculare: row_obj.numarInmatriculare,
      consumNormat: row_obj.consumNormat,
      anFabricatie: row_obj.anFabricatie,
      tipCarburant: row_obj.tipCarburant,
      serieCaroserie: row_obj.serieCaroserie,
      capacitateRezervor: row_obj.capacitateRezervor,
      categorie: row_obj.categorie,
      endDataAsig: "string",
      endDataItp: "string",
      kilometriiRulati: 120,
      startDataAsig:"string",
      startDataItp: "string",
      
    };

    this.dataSource.data.push(datatemp);  
    this.masinaService.addMasina(datatemp); 
    this.table.renderRows();
    
  }

  updateRowData(row_obj){

    var datatemp : ICar = {
      id: row_obj.id,
      marca: row_obj.marca,
      model: row_obj.model,
      numarInmatriculare: row_obj.numarInmatriculare,
      consumNormat: row_obj.consumNormat,
      anFabricatie: row_obj.anFabricatie,
      tipCarburant: row_obj.tipCarburant,
      serieCaroserie: row_obj.serieCaroserie,
      capacitateRezervor: row_obj.capacitateRezervor,
      categorie: row_obj.categorie,
      endDataAsig: "string",
      endDataItp: "string",
      kilometriiRulati: 120,
      startDataAsig:"string",
      startDataItp: "string",
      
    };

    this.dataSource = new MatTableDataSource<ICar>(this.dataSource.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.tipCarburant = row_obj.tipCarburant;
        value.marca= row_obj.marca;
        value.model=row_obj.model;
        value.numarInmatriculare= row_obj.numarInmatriculare;
        value.consumNormat= row_obj.consumNormat;
        value.anFabricatie=row_obj.anFabricatie;
        value.tipCarburant= row_obj.tipCarburant;
        value.serieCaroserie= row_obj.serieCaroserie;
        value.capacitateRezervor=row_obj.capacitateRezervor;
        value.categorie= row_obj.categorie;
        // value.endDataAsig= "string",
        // endDataItp: "string",
        // kilometriiRulati: 120,
        // startDataAsig:"string",
        // startDataItp: "string",
        this.masinaService.updateMasina(datatemp)
      }
      return true;
      })
    );
    this.table.renderRows();


  }

  deleteRowData(row_obj){
    
    this.dataSource = new MatTableDataSource<ICar>(
      this.dataSource.data.filter((value,key)=>{
        if (value.id == row_obj.id) {
          this.masinaService.deleteMasina(row_obj.id)
          return false
        }
        return true
      })
    );
    this.table.renderRows();
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
  


  ngOnInit(): void {           // fct initiala
    // this.getRemoteData();

    // Overrride default filter behaviour of Material Datatable
    // this.dataSource.filterPredicate = this.createFilter();
  }

  // ngOnInit() {
  //   this.dataSourceDriver.filterPredicate = function(data, filter: string): boolean {
  //     return data.numePrenume.toLowerCase().includes(filter) || data.cnp.toLowerCase().includes(filter) || data.id.toLowerCase().includes(filter) || data.categoriiPermis.toLowerCase().includes(filter);
  //   };
  // }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSourceDriver.paginator = this.paginatorDriver;
    this.dataSourceDriver.sort = this.sortDriver;
  }

  addNew() {
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {car: Car }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
       // this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }

  // startEdit(i: number, id: number, title: string, state: string, url: string, created_at: string, updated_at: string) {
  //   this.id = id;
  //   // index row is used just for debugging proposes and can be removed
  //   this.index = i;
  //   console.log(this.index);
  //   const dialogRef = this.dialog.open(EditDialogComponent, {
  //     data: {id: id, title: title, state: state, url: url, created_at: created_at, updated_at: updated_at}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 1) {
  //       // When using an edit things are little different, firstly we find record inside DataService by id
  //       const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
  //       // Then you update that record using data from dialogData (values you enetered)
  //       this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
  //       // And lastly refresh table
  //       this.refreshTable();
  //     }
  //   });
  // }

  // deleteItem(i: number, id: number, title: string, state: string, url: string) {
  //   this.index = i;
  //   this.id = id;
  //   const dialogRef = this.dialog.open(DeleteDialogComponent, {
  //     data: {id: id, title: title, state: state, url: url}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 1) {
  //       const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
  //       // for delete we use splice in order to remove single object from DataService
  //       this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
  //       this.refreshTable();
  //     }
  //   });
  // }


  private refreshTable() {
    // Refreshing table using paginator
    // Thanks yeager-j for tips
    // https://github.com/marinantonio/angular-mat-table-crud/issues/12
    this.paginator._changePageSize(this.paginator.pageSize);
  }



  curentCars: string

  showVal(id: string){
    console.log(id)
    
    this.SoferService.getMasiniForSoferi(id).subscribe(data => {
      console.log('Get Masini for Sofer!')
      if (data != null) {
        console.log(data["numarInmatriculare"])
        this.curentCars=data
      }
    })

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {nrMatriculare: this.curentCars}
    },);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ICar): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}
// function AddDialogComponent(AddDialogComponent: any, arg1: { data: { car: any; }; }) {
//   throw new Error('Function not implemented.');
// }

