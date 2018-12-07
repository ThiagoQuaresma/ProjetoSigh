import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './paciente.component';

const routes: Routes = [
    {
        path: '',
        data:{
            title: 'new-paciente'
        },
        children: [
            {
                path: '',
                component: PacienteComponent,
                data: {
                    title: 'new-paciente'
                }
            },
            {
                path: 'new-paciente',
                loadChildren: './new-paciente/new-paciente.module#NewPacienteModule'
            },
            {
                path: '',
                component: PacienteComponent,
                data: {
                    title: 'alter-paciente'
                }
            },
            {
                path: 'alter-paciente',
                loadChildren: './alter-paciente/alter-paciente.module#AlterPacienteModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PacienteRoutingModule{

}