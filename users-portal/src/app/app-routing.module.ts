import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentComponent } from './document/document.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentNewComponent } from './document-new/document-new.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';

const routes: Routes = [
  {
    path: 'documents',
    component: DocumentComponent,
    data: { title: 'Documentos'}
  },
  {
    path: 'documents-details/:id',
    component: DocumentDetailComponent,
    data: { title: 'Detalhe do Documento'}
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
    path: '',
    redirectTo: '/documents',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
