import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DatesComponent } from './dates/dates.component';
import { MydatesComponent } from './mydates/mydates.component';

const routes: Routes = [
  { path: '', component: DatesComponent},
  { path: 'mydates', component: MydatesComponent},
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
