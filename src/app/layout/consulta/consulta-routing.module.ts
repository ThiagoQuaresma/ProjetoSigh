import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta.component';

const routes: Routes = [
    {
        path: '',
        data:{
            title: 'consulta'
        },
        children: [
            {
                path: '',
                component: ConsultaComponent,
                data: {
                    title: 'new-consulta'
                }
            },
            {
                path: 'new-consulta',
                loadChildren: './new-consulta/new-consulta.module#NewConsultaModule'
            },
            {
                path: '',
                component: ConsultaComponent,
                data: {
                    title: 'cadastrar-consulta'
                }
            },
            {
                path: 'cadastrar-consulta',
                loadChildren: './cadastrar-consulta/cadastrar-consulta.module#CadastrarConsultaModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ConsultaRoutingModule{

}