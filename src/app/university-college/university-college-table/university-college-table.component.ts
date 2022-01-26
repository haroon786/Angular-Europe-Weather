import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UniversityCollegeService } from './university-college.service';

export interface Iuniveristy
{
  countryCode: string
id: number
name: string
}
@Component({
  selector: 'app-university-college-table',
  templateUrl: './university-college-table.component.html',
  styleUrls: ['./university-college-table.component.scss']
})
export class UniversityCollegeTableComponent implements  OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<any>;
  dataSource: any;

  page:number=1;
  countryCode:string="IN";
  limit:number=50;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private univeristy:UniversityCollegeService) {
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
   this.univeristy.getUniversityes(this.page,this.countryCode,this.limit).subscribe((data)=>
   {
    console.log(data)
      this.dataSource.data=data
    // this.dataSource.data.length=1751;

   })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  pageChanged(event:any)
  {
    console.log(event)
  }
}
