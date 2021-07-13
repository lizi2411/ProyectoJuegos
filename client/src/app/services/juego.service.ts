import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Juego } from '../models/juegos';


@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  public url:string;
  public headers = new HttpHeaders({
    'content-Type':'application/json'
  });

  constructor(private _http:HttpClient) {
    this.url = 'http://localhost:3977/api/';
   }

  //metodos que interactuan con la api
  

  //metodo que obtiene el listado de registros
  getJuegos(){
    return this._http.get(this.url+'videojs',{headers:this.headers});
  }

  //metodo que envia un objeto para insertar
  addJuego(juego:Juego){
    //convertimos el objeto de Typescript a JSON
    let params = JSON.stringify(juego);
    return this._http.post(this.url+'save',params,{headers:this.headers});

  }

  //metodo para enviar un objeto para modificar 
  editJuego(juego:Juego){
    let params = JSON.stringify(juego);
    let id = juego._id;
    return this._http.put(this.url+'videojup/'+id,params,{headers:this.headers});
  }
  //metodo para enviar un id para eliminar
  deleteJuego(id:string){
    return this._http.delete(this.url+'videojd/'+id,{headers:this.headers});
  }
  
}