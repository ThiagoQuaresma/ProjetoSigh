import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewConsultaComponent } from './new-consulta.component';

const routes: Routes = [
    {
        path:'', component: NewConsultaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NewConsultaRoutingModule{

}