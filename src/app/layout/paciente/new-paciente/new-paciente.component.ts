import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-new-paciente',
  templateUrl: './new-paciente.component.html',
  styleUrls: ['./new-paciente.component.scss'],
  animations: [routerTransition()]
})
export class NewPacienteComponent implements OnInit {

  constructor(private Http: Http) { }

  ngOnInit() {
  }

  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, ')', ' ',/[9-9]/, ' ',/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]

  consultaCEP(cep){

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se o campo possui valor informado.
    if(cep != ""){

      //Expressão regular para validar CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)){

        this.Http.get(`//viacep.com.br/ws/${cep}/json`)
          .map(dados => dados.json())
          .subscribe(dados => console.log(dados));
      }
    }
  }

}
