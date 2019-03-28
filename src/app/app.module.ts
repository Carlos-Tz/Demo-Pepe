import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { P1Component } from './components/p1/p1.component';
import { P2Component } from './components/p2/p2.component';
import { P3Component } from './components/p3/p3.component';
import { P4Component } from './components/p4/p4.component';
import { P5Component } from './components/p5/p5.component';
import { P6Component } from './components/p6/p6.component';
import { P7Component } from './components/p7/p7.component';
import { P8Component } from './components/p8/p8.component';
import { P9Component } from './components/p9/p9.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component,
    P5Component,
    P6Component,
    P7Component,
    P8Component,
    P9Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbRatingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
