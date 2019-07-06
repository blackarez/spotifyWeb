import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})


export class SpotifyService {
  constructor(private http: HttpClient) {  }
  nuevosAlbumes:any[]=[];

  //-- unificacion de peticiones
  peticion( consulta: string){
    const url = `https://api.spotify.com/v1/${consulta}`;
    const headers = new HttpHeaders({
      Authorization: "Bearer BQCopDj54oRahTIuNSrhglrCX3M61-C46vz4TaqUqF5BW8DZunzKEaK5GlF66h3NMF0c2i5vxBf3H0OfJQnfCC3sexqtopDWkKFjnWSl9se0GhGXLXjBlIVJeEuVXqzgAqmIiyfKBu562MI"
    });
    return this.http.get(url,{headers});
  }
  
  //--- trae los nuevos albunes
  getNewRealises(){
    return this.peticion("browse/new-releases")
    .pipe(
      map( (data:any )=>{
        let newData =data['albums'].items;
        return this.soloAlbum(newData);
      })
    ); 
  }

  //--- busca por album
  getSearchAlbum(NameAlbum:string){
    return this.peticion(`search?q=${NameAlbum}&type=album&limit=10`).pipe(
      map( (data:any )=>{
        let newData =data['albums'].items;
        return this.soloAlbum(newData);
      })
    );
  }

  //--- get album por id
  getAlbumId(AlbumId:string){
    return this.peticion(`albums/${AlbumId}`);
  }

  //-- validador
  private soloAlbum(newData:any){
    let Albumes:any[]=[];
    for(let i = 0; i< newData.length; i++){
      if(newData[i].album_type=="album"){
        Albumes.push(newData[i]);
      }
    }
    return Albumes;
  }

  //-- conseguir tracks
  getTracks(idAlbum : string){
    return this.peticion(`albums/${idAlbum}/tracks`)
    .pipe(
      map( data=>{
        return data['items']['0']['uri'];
      })
    ); 
  }

  //-- llamar datos por username
  getDataClient(userId:string){
    return this.peticion(`users/${userId}`)
    .pipe(
      map( data=>{
        return data;
      })
    ); 
  }

  //--datos del usuario logeado
  getMeData(){
    return this.peticion(`me`)
    .pipe(
      map( data=>{
        console.log(data);
      })
    ); 
  }

  //-- solicitud de logeo por node
  getLogin(){
    this.http.get('http://localhost:8888/login').subscribe(
      data =>{
        console.log(data);
        
      }
    );
  }
}
