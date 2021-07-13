import { Component,OnInit } from '@angular/core';
import { JuegoService } from './services/juego.service';
import { PlataformaService } from './services/plataforma.service';
import { Juego} from './models/juegos';
import { Plataforma } from './models/plataforma';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[JuegoService,PlataformaService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Juegos';
  public juegos: Juego []=[];
  public plataformas: Plataforma []=[];
  juego = new Juego('','','','','');
  plataforma = new Plataforma('','','');
  constructor(private _juegoService:JuegoService,private _plataformaService:PlataformaService){}
  ngOnInit(){
    this.getJuegos();
    this.getPlataformas();
  }
  //metodo para obtener los datos que se muestran 
  getPlataformas(){
    this._plataformaService.getPlataformas().subscribe((plataformas:Plataforma[])=>{
      this.plataformas = plataformas ;
    });

  }
  //metodo para insertar plataforma desde el  formulario
  addPlataforma(){
    this._plataformaService.addPlataforma(this.plataforma).subscribe((res)=>{
      this.clearPlataforma();
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    });
  }

  //metodo que borra los datos del objeto juego
  clearPlataforma(){
    this.plataforma._id='';
    this.plataforma.nombrep='';
    this.plataforma.id_j='';
    
  }
  //metodo para editar un juego 

  editPlataforma(){
    this._plataformaService.editPlataforma(this.plataforma).subscribe((res)=>{
      this.clearPlataforma();
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);

    });
  }
  //metodo para eliminar una plataforma desde  el formulario 
  deletePlataforma(){
    this._plataformaService.deletePlataforma(this.plataforma._id).subscribe((res)=>{
      this.clearPlataforma();
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    });
  }
  //metodo para seleccionar la paltaforma que queremos  modificar o eliminar
  selectPlataforma(plataforma)
  {
    this.plataforma = plataforma;

  }
  //metodo para obtener los datos que se muestran 
  getJuegos(){
    this._juegoService.getJuegos().subscribe((juegos:Juego[])=>{
      this.juegos = juegos;
    });

  }
  //metodo para insertar a un juegos desde el  formulario
  addJuego(){
    this._juegoService.addJuego(this.juego).subscribe((res)=>{
      this.clearJuego();
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    });
  }

  //metodo que borra los datos del objeto juego
  clearJuego(){
    this.juego._id='';
    this.juego.nombre='';
    this.juego.lanzamiento='';
    this.juego.compania='';
    this.juego.genero='';
  }
  //metodo para editar un juego 

  editJuego(){
    this._juegoService.editJuego(this.juego).subscribe((res)=>{
      this.clearJuego();
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);

    });
  }
  //metodo para eliminar un juego desde  el formulario 
  deleteJuego(){
    this._juegoService.deleteJuego(this.juego._id).subscribe((res)=>{
      this.clearJuego();
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    });
  }
  //metodo para resetear el formulario
  onSubmit(form:NgForm){
    form.resetForm();
  }
  //metodo para seleccionar al juego que queremos  modificar o eliminar
  selectJuego(juego)
  {
    this.juego = juego;

  }
  confirm()
  {
    if (window.confirm("¿Estas seguro de  eliminar este juego ?") == true)
    {
      this.deleteJuego();
    }else{
        this.ngOnInit();
     }
  }
  confirm2()
  {
    if (window.confirm("¿Estas seguro de  eliminar esta plataforma?") == true)
    {
      this.deletePlataforma();
    }else{
        this.ngOnInit();
     }
  }

}
