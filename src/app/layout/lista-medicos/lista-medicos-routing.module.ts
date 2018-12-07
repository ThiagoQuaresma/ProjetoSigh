import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaMedicosComponent } from './lista-medicos.component';

const routes: Routes = [
    {
        path: '',
        data:{
            title: 'medico'
        },
        children: [
            {
                path: '',
                component: ListaMedicosComponent,
                data: {
                    title: 'new-medico'
                }
            },
            {
                path: 'new-medico',
                loadChildren: './new-medico/new-medico.module#NewMedicoModule'
            },
            {
                path: '',
                component: ListaMedicosComponent,
                data: {
                    title: 'alter-medico'
                }
            },
            {
                path: 'alter-medico',
                loadChildren: './alter-medico/alter-medico.module#AlterMedicoModule'
            }
            
        ]
        
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ListaMedicosRoutingModule{

}