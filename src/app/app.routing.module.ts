import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    component: homeScreen
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: 'listagemusuarios',
    component: ListagemUsuariosComponent
  },
  {
    path: 'cadastrodisciplina',
    component: MantemDisciplinaComponent
  },
  {
    path: 'editadisciplina/:nome',
    component: MantemDisciplinaComponent
  },
  {
    path: 'listagemdisciplinas',
    component: ListagemDisciplinaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }