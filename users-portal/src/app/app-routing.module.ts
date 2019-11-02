import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentComponent } from './document/document.component';
import { DocumentNewComponent } from './document-new/document-new.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: 'documents',
    component: DocumentComponent,
    data: { title: 'Documentos'}
  },
  {
    path: 'documents-upload',
    component: DocumentNewComponent,
    data: { title: 'Upload Documento'}
  },
  {
    path: 'documents-edit/:id',
    component: DocumentEditComponent,
    data: { title: 'Editar Documento'}
  },
  {
    path: 'reports',
    component: ReportsComponent,
    data: { title: 'Relatórios'}
  },
  {
    path: 'users',
    component: UsersComponent,
    data: { title: 'Usuários'}
  },
  {
    path: '',
    redirectTo: 'documents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
