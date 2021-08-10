import { Component, OnInit, ElementRef } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { FunctionExpr } from '@angular/compiler';
import { MasinaService } from '../services/masina.service';
import {MatDialog} from '@angular/material/dialog';

import { CursaService } from '../services/cursa.service';
import { AlimentareService } from '../services/alimentare.service';
//import { ModalComponent } from '../modal/modal.component';
//import { AddDialogComponent } from '../dialogs/add/add.dialog.component';
//import { Car } from '../model/car';
import { Alimentare } from '../model/alimentare';


import { MatTable } from '@angular/material/table';

//import { DialogBoxCursaComponent } from '../dialog-box-cursa/dialog-box-cursa.component';
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
import { DialogBoxAlimentareComponent } from '../dialog-box-alimentare/dialog-box-alimentare.component';
import { ModalComponent } from '../modal/modal.component';
import { SoferService } from '../services/sofer.service';


export type ChartOptionsLineChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

export interface IAlimentare {
  id: string;
  dataOra: string;
  numarLitrii: string;
  pretTotal: string;
  pretUnitar: string;
}

@Component({
  selector: 'app-alimentari',
  templateUrl: './alimentari.component.html',
  styleUrls: ['./alimentari.component.scss']
})
export class AlimentareComponent implements OnInit {

  displayedColumnsIAlimentare: string[] = ['select', 'dataOra', 'numarLitrii', 'pretTotal', 'pretUnitar', 'action','view']; 
  selectionAlimentare = new SelectionModel<IAlimentare>(true, []);
  dataSourceAlimentare = new MatTableDataSource<IAlimentare>();


  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  @ViewChild("chart1") chart1: ChartComponent;
  public chartOptionsLineChart: Partial<ChartOptionsLineChart>;

  litriiParcurisPeLuni=[]

  constructor(
    private SoferService : SoferService,
    private AlimentareService : AlimentareService,
    public dialog: MatDialog
  ) {
    this.AlimentareService.getAlimentari().subscribe(data => {
      console.log('Populate!')
      if (data != null) {
        this.dataSourceAlimentare = new MatTableDataSource<IAlimentare>(data);
        this.dataSourceAlimentare.paginator = this.paginator;
        this.dataSourceAlimentare.sort = this.sort;
      }
    })
    
    this.AlimentareService.getListaAlimentariPerMonth().subscribe(data => {
      console.log('Populate!')
      if (data != null) {
        data.forEach(element => {
          this.litriiParcurisPeLuni.push(element)
        });
      }
    })

    this.chartOptionsLineChart = {
      series: [
        {
          name: "Total litrii",
          data: this.litriiParcurisPeLuni
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Litri consumati per luna raport",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Ian",
          "Feb",
          "Mar",
          "Apr",
          "Mai",
          "Iun",
          "Iul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      }
    };
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAlimentare.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceAlimentare.paginator) {
      this.dataSourceAlimentare.paginator.firstPage();
    }
  }

  openDialogAlimentare(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxAlimentareComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowDataCursa(result.data);
      }else if(result.event == 'Update'){
        this.updateRowDataCursa(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowDataCursa(result.data);
      }
    });
  }

  addRowDataCursa(row_obj){
    var d = new Date();

     var datatemp : IAlimentare = {
  
      id: d.getTime().toString(),
      dataOra: row_obj.dataOra,
      numarLitrii: row_obj.numarLitrii,
      pretTotal: row_obj.pretTotal,
      pretUnitar: row_obj.pretUnitar,
    };

    this.dataSourceAlimentare.data.push(datatemp); 
    console.log(datatemp) 
    this.AlimentareService.addAlimentare(datatemp); 
    this.table.renderRows();
    
  }

 

  updateRowDataCursa(row_obj){
    // var datatemp : ICursa = {
    //   id: row_obj.id,
    //   name: row_obj.name,
    //   model: row_obj.model,
    //   dataPreluare: row_obj.date,
    //   dataPredare: row_obj.date2,
    //   numberOfKm: row_obj.numberOfKm,
    //   fuel: row_obj.fuel
    // };

    var datatemp : IAlimentare = {
      id: row_obj.id,
      dataOra: row_obj.dataOra,
      numarLitrii: row_obj.numarLitrii,
      pretTotal: row_obj.pretTotal,
      pretUnitar: row_obj.pretUnitar,
    };
    console.log(row_obj)
    this.dataSourceAlimentare = new MatTableDataSource<IAlimentare>(this.dataSourceAlimentare.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.dataOra = datatemp.dataOra;
        value.numarLitrii= datatemp.numarLitrii;
        value.pretTotal=datatemp.pretTotal;
        value.pretUnitar= datatemp.pretUnitar;
 
        console.log(datatemp)
        this.AlimentareService.updateAlimentare(datatemp)
      }
      return true;
      })
    );
    
    this.table.renderRows();

  }

  deleteRowDataCursa(row_obj){
    
    this.dataSourceAlimentare = new MatTableDataSource<IAlimentare>(
      this.dataSourceAlimentare.data.filter((value,key)=>{
        if (value.id == row_obj.id) {
          this.AlimentareService.deleteAlimentare(row_obj.id)
          return false
        }
        return true
      })
    );
    this.table.renderRows();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSourceAlimentare.paginator = this.paginator;
    this.dataSourceAlimentare.sort = this.sort;
  }

  curentCars: string

  showVal(id: string){
    console.log(id)
    
    this.SoferService.getMasinaForAlimentare(id).subscribe(data => {
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
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selectionAlimentare.selected.length;
    const numRows = this.dataSourceAlimentare.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selectionAlimentare.clear() :
        this.dataSourceAlimentare.data.forEach(row => this.selectionAlimentare.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: IAlimentare): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selectionAlimentare.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}

