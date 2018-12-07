import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-new-medico',
    templateUrl: './alter-medico.component.html',
    styleUrls: ['./alter-medico.component.scss'],
    animations: [routerTransition()]
})
export class AlterMedicoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
