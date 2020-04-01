import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternCreateComponent } from './components/intern-create/intern-create.component';
import { InternListComponent } from './components/employee-list/employee-list.component';
import { InternEditComponent } from './components/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: InternCreateComponent },
  { path: 'edit-employee/:id', component: InternEditComponent },
  { path: 'employees-list', component: InternListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }