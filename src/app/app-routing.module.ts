import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatesComponent } from './dates/dates.component';
import { MydatesComponent } from './mydates/mydates.component';

const routes: Routes = [
  { path: '', component: DatesComponent},
  { path: 'MyDates', component: MydatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
