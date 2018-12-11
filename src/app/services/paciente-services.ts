import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../classes/paciente';


@Injectable()
export class  PacienteService {
    
    private url = environment.localUrl+'paciente/';

    constructor(private http: HttpClient) {}

   public findAll(){
    return this.http.get<Paciente[]>(this.url);
   }

   public insertPaciente(paciente: Paciente){
       return this.http.post(this.url, paciente);
   }

   public getPaciente(id:number){
       return this.http.get<Paciente>(this.url+id);
   }

   public deletePaciente(id:number){
       return this.http.delete(this.url+id);
   }

   public updatePaciente(paciente: Paciente){
    return this.http.put(this.url, paciente)
}
  
}

