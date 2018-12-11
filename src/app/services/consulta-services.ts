import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../classes/paciente';
import { Consulta } from '../classes/consulta';


@Injectable()
export class  ConsultaService {
    
    private url = environment.localUrl+'consulta/';

    constructor(private http: HttpClient) {}

   public findAll(){
    return this.http.get<Consulta[]>(this.url);
   }

   public insertConsulta(consulta: Consulta){
       return this.http.post(this.url, consulta);
   }

   public getConsulta(id:number){
       return this.http.get<Consulta>(this.url+id);
   }

   public deleteConsulta(id:number){
       return this.http.delete(this.url+id);
   }

   public updateConsulta(consulta: Consulta){
    return this.http.put(this.url, consulta)
}
  
}

