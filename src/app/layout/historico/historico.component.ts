import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
  animations: [routerTransition()]
})
export class HistoricoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
