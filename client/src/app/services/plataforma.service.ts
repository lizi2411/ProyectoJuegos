import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Plataforma } from '../models/plataforma';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {
  public url:string;
  public headers = new HttpHeaders({
    'content-Type':'application/json'
  });

  constructor(private _http:HttpClient) {
    this.url = 'http://localhost:3977/api/';
   }
   //metodo que obtiene el listado de registros
  getPlataformas(){
    return this._http.get(this.url+'obtenerps',{headers:this.headers});
  }

  //metodo que envia un objeto para insertar
  addPlataforma(plataforma:Plataforma){
    //convertimos el objeto de Typescript a JSON
    let params = JSON.stringify(plataforma);
    return this._http.post(this.url+'savep',params,{headers:this.headers});

  }

  //metodo para enviar un objeto para modificar 
  editPlataforma(plataforma:Plataforma){
    let params = JSON.stringify(plataforma);
    let id = plataforma._id;
    return this._http.put(this.url+'updatep/'+id,params,{headers:this.headers});
  }
  //metodo para enviar un id para eliminar
  deletePlataforma(id:string){
    return this._http.delete(this.url+'borrarp/'+id,{headers:this.headers});
  }
}
