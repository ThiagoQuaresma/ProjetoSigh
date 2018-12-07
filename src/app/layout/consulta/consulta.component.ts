import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],
  animations: [routerTransition()]
})
export class ConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
