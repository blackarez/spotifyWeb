import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//-- service
import { SpotifyService } from 'src/app/service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit  {

  //-- declaracion
  mostrarLista:boolean=true;
  listado: any[] = [];
  user:string;
  pwd:string;
  img:any;

  constructor( private spotify: SpotifyService , private router : Router) {
    this.newAlbumes();
  }
  
  ngOnInit() {
  }

  buscar( album:string ){
    console.log(album);
    if(album != "" && album != " " ){
      this.spotify.getSearchAlbum(album).subscribe(
        (data)=>{
          console.log(data);
          this.listado = data;
        }
      );
    }else{
      this.newAlbumes();
    }
  }

  newAlbumes(){
    this.spotify.getNewRealises().subscribe( (data:any) =>{
      this.listado = data;
    });
  }

  getDataClient(){
    //this.spotify.getLogin();
    /* this.spotify.getDataClient().subscribe(
      data=>{ console.log(data);
      }
    ); */
  }
  


}
