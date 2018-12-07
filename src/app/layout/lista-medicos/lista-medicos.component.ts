import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.scss'],
  animations: [routerTransition()]
})
export class ListaMedicosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
