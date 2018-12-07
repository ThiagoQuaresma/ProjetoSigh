import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'blank-page', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'agenda', loadChildren: './agenda/agenda.module#AgendaModule' },
            { path: 'consulta', loadChildren: './consulta/consulta.module#ConsultaModule' },
            { path: 'historico', loadChildren: './historico/historico.module#HistoricoModule' },
            { path: 'agendamento', loadChildren: './agenda/agendamento/agendamento.module#AgendamentoModule' },
            { path: 'paciente', loadChildren: './paciente/paciente.module#PacienteModule'},
            { path: 'lista-medicos', loadChildren: './lista-medicos/lista-medicos.module#ListaMedicosModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
