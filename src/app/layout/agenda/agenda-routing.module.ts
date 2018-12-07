import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendaComponent } from './agenda.component';

const routes: Routes = [
    {
        path: '',
        data:{
            title: 'agendamento'
        },
        children: [
            {
                path: '',
                component: AgendaComponent,
                data: {
                    title: 'agendamento'
                }
            },
            {
                path: 'agendamento',
                loadChildren: './agendamento/agendamento.module#AgendamentoModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AgendaRoutingModule{

}