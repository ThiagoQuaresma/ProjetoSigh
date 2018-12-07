import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarConsultaComponent } from './cadastrar-consulta.component';

const routes: Routes = [
    {
        path:'', component: CadastrarConsultaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CadastrarConsultaRoutingModule{

}