import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityCollegeTableComponent } from './university-college-table/university-college-table.component';
import { UniversityCollegeComponent } from './university-college.component';

const routes: Routes = [{ path: '', component: UniversityCollegeTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityCollegeRoutingModule { }
