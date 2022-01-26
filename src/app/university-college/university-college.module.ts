import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityCollegeRoutingModule } from './university-college-routing.module';
import { UniversityCollegeComponent } from './university-college.component';
import { UniversityCollegeTableComponent } from './university-college-table/university-college-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    UniversityCollegeComponent,
    UniversityCollegeTableComponent
  ],
  imports: [
    CommonModule,
    UniversityCollegeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class UniversityCollegeModule { }
