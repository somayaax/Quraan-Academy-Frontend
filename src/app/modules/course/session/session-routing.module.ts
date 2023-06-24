import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionTableComponent } from './components/session-table/session-table.component';

const routes: Routes = [
  { path: 'details', data: { title: 'Sessions' }, component: SessionTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionRoutingModule { }
