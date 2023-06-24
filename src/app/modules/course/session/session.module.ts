import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionRoutingModule } from './session-routing.module';
import { SessionTableComponent } from './components/session-table/session-table.component';


@NgModule({
  declarations: [
    SessionTableComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule
  ]
})
export class SessionModule { }
