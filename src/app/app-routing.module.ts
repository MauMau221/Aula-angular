import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { FormularioComponent } from './formulario/formulario.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'quem-somos', component: QuemSomosComponent},
  { path: 'contato', component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
