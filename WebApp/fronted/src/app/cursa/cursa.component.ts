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
import { ModalComponent } from '../modal/modal.component';
import { AddDialogComponent } from '../dialogs/add/add.dialog.component';
import { Car } from '../model/car';

import { MatTable } from '@angular/material/table';

import { DialogBoxCursaComponent } from '../dialog-box-cursa/dialog-box-cursa.component';
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

export type ChartOptionsLineChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

export interface ICursa {
  id: string;
  numeSofer: string;
  modelMarcaMasina: string;
  dataOraPreluare: string;
  dataOraPredare: string;
  numarKilometriParcursi: number;
  combustibilConsumat: number;
}


export interface ICarburant {
  name: string;
}

@Component({
  selector: 'app-cursa',
  templateUrl: './cursa.component.html',
  styleUrls: ['./cursa.component.scss']
})
export class CursaComponent implements OnInit {

  displayedColumnsCursa: string[] = ['select', 'name', 'model', 'dataPreluare', 'dataPredare', 'numarKilometriParcursi', 'combustibilConsumat', 'action']; 
  selectionCurse = new SelectionModel<ICursa>(true, []);
  dataSourceCurse = new MatTableDataSource<ICursa>();


  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  
  @ViewChild("chart1") chart1: ChartComponent;
  public chartOptionsLineChart: Partial<ChartOptionsLineChart>;

  kmParcurisPeLuni=[]

  constructor(
    private CursaService : CursaService,
    public dialog: MatDialog
  ) {
    this.CursaService.getCurse().subscribe(data => {
      console.log('Populate!')
      if (data != null) {
        this.dataSourceCurse = new MatTableDataSource<ICursa>(data);
        this.dataSourceCurse.paginator = this.paginator;
        this.dataSourceCurse.sort = this.sort;
      }
    })


    this.CursaService.getKmCursePeLuna().subscribe(data => {
      console.log('Populate!')
      if (data != null) {
        data.forEach(element => {
          this.kmParcurisPeLuni.push(element)
        });
      }
    })

    this.chartOptionsLineChart = {
      series: [
        {
          name: "Total km",
          data: this.kmParcurisPeLuni
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
        text: "Km parcursi raport",
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
    this.dataSourceCurse.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceCurse.paginator) {
      this.dataSourceCurse.paginator.firstPage();
    }
  }

  openDialogCursa(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxCursaComponent, {
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

     var datatemp : ICursa = {
  
      id: d.getTime().toString(),
      numeSofer: row_obj.numeSofer,
      modelMarcaMasina: row_obj.modelMarcaMasina,
      dataOraPreluare: row_obj.dataOraPreluare,
      dataOraPredare: row_obj.dataOraPredare,
      numarKilometriParcursi: row_obj.numarKilometriParcursi,
      combustibilConsumat: row_obj.combustibilConsumat
    };

    this.dataSourceCurse.data.push(datatemp); 
    console.log(datatemp) 
    this.CursaService.addCursa(datatemp); 
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

    var datatemp : ICursa = {
      id: row_obj.id,
      numeSofer: row_obj.numeSofer,
      modelMarcaMasina: row_obj.modelMarcaMasina,
      dataOraPreluare: row_obj.dataOraPreluare,
      dataOraPredare: row_obj.dataOraPredare,
      numarKilometriParcursi: row_obj.numarKilometriParcursi,
      combustibilConsumat: row_obj.combustibilConsumat
    };
    console.log(row_obj)
    this.dataSourceCurse = new MatTableDataSource<ICursa>(this.dataSourceCurse.data.filter((value,key)=>{
      if(value.id == row_obj.id){
        // value.name = datatemp.name;
        // value.model= datatemp.model;
        // value.dataPreluare=datatemp.dataPreluare;
        // value.dataPredare= datatemp.dataPredare;
        // value.numberOfKm= datatemp.numberOfKm;
        // value.fuel= datatemp.fuel;
        value.numeSofer = datatemp.numeSofer;
        value.modelMarcaMasina= datatemp.modelMarcaMasina;
        value.dataOraPreluare=datatemp.dataOraPreluare;
        value.dataOraPredare= datatemp.dataOraPredare;
        value.numarKilometriParcursi= datatemp.numarKilometriParcursi;
        value.combustibilConsumat= datatemp.combustibilConsumat;
        console.log(datatemp)
        this.CursaService.updateCursa(datatemp)
      }
      return true;
      })
    );
    
    this.table.renderRows();

  }

  deleteRowDataCursa(row_obj){
    
    this.dataSourceCurse = new MatTableDataSource<ICursa>(
      this.dataSourceCurse.data.filter((value,key)=>{
        if (value.id == row_obj.id) {
          this.CursaService.deleteCursa(row_obj.id)
          return false
        }
        return true
      })
    );
    this.table.renderRows();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSourceCurse.paginator = this.paginator;
    this.dataSourceCurse.sort = this.sort;
  }

  curentCurse: string

  showVal(id: string){
    console.log(id)
    
    this.CursaService.getAlimentariForCurse(id).subscribe(data => {
      console.log('Get Alimentari for Curse !')
      if (data != null) {
        console.log(data["numarInmatriculare"])
        this.curentCurse=data
      }
    })

    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {nrMatriculare: this.curentCurse}
    },);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selectionCurse.selected.length;
    const numRows = this.dataSourceCurse.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selectionCurse.clear() :
        this.dataSourceCurse.data.forEach(row => this.selectionCurse.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ICursa): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selectionCurse.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

}

