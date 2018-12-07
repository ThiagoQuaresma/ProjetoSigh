import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.scss'],
  animations: [routerTransition()]
})
export class CadastrarConsultaComponent implements OnInit {
  showInputFlg: boolean;

  constructor() { }

  ngOnInit() {


  }
  
  public showDateInputMedicamento = false;

  radioValueCheckMedicamento(x) {
      this.showDateInputMedicamento = (x === 1);
  }

  public showDateInputAlergia = false;

  radioValueCheckAlergia(x) {
      this.showDateInputAlergia = (x === 1);
  }

  public showDateInputDoenca = false;

  radioValueCheckDoenca(x) {
      this.showDateInputDoenca = (x === 1);
  }

}
