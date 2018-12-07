import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  animations: [routerTransition()]
})


export class AgendaComponent implements OnInit {

  dia: any;
  mes: any;
  ano: any;
  j: any = 0;
  constructor() { 

    this.mes = {
      month:[
        {m:'Janeiro', id: 1},
        {m:'Fevereiro', id: 2},
        {m:'Março', id: 3},
        {m:'Abril', id: 4},
        {m:'Maio', id: 5},
        {m:'Junho', id: 6},
        {m:'Julho', id: 7},
        {m:'Agosto', id: 8},
        {m:'Setembro', id: 9},
        {m:'Outubro', id: 10},
        {m:'Novembro', id: 11},
        {m:'Dezembro', id: 12}
      ]
    }

    function diasNoMes(mes, ano) {
      var data = new Date(ano, mes, 0);
      return data.getDate();
  }

    function _numDias(){
      var objData = new Date(),
          numAno = objData.getFullYear(),
          numMes = objData.getMonth()+1,
          numDias = new Date(numAno, numMes, 0).getDate();
    
      return numDias;
    }

    var teste = new Array();
    
    for(var i = 0; i < _numDias(); i++){

      this.j++;
      teste[i] = this.j;
      this.dia = {
        number:[teste]
      }  
    }


    for(var i = 1; i <= diasNoMes(this.mes,this.ano); i++){

      this.j++;
      teste[i] = this.j;
      this.dia = {
        number:[teste]
      }  
    }

    

  }

  ngOnInit() {
  }

}




