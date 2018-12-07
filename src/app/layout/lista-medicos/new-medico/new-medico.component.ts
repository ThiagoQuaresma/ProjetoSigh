import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-new-medico',
    templateUrl: './new-medico.component.html',
    styleUrls: ['./new-medico.component.scss'],
    animations: [routerTransition()]
})
export class NewMedicoComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
