import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-new-consulta',
  templateUrl: './new-consulta.component.html',
  styleUrls: ['./new-consulta.component.scss'],
  animations: [routerTransition()]
})
export class NewConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
