import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { P1Component } from './components/p1/p1.component';
import { P2Component } from './components/p2/p2.component';
import { P3Component } from './components/p3/p3.component';
import { P4Component } from './components/p4/p4.component';
import { P6Component } from './components/p6/p6.component';
import { P5Component } from './components/p5/p5.component';
import { P7Component } from './components/p7/p7.component';
import { P8Component } from './components/p8/p8.component';
import { P9Component } from './components/p9/p9.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', component: P1Component},
  { path: '2', component: P2Component},
  { path: '3', component: P3Component},
  { path: '4', component: P4Component},
  { path: '5', component: P5Component},
  { path: '6', component: P6Component},
  { path: '7', component: P7Component},
  { path: '8', component: P8Component},
  { path: '9', component: P9Component}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }