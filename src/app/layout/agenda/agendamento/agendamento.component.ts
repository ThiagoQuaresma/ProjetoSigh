import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss'],
  animations: [routerTransition()]
})
export class AgendamentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
