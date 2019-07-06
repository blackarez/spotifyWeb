import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//-- service
import { SpotifyService } from 'src/app/service/spotify.service';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styles: []
})
export class MoreComponent implements OnInit {

  //-decaraciones iniciales
  album:string;
  img:string;
  tracksList:any[]= [];

  constructor(
    private route : ActivatedRoute,
    private spotify: SpotifyService,
    ) { }

  ngOnInit() {
      this.datosAlbum();
  }
  

  datosAlbum(){
    this.route.paramMap.subscribe(params => {
      this.album = params.get('albumId');
      this.spotify.getAlbumId(this.album).subscribe(
        (data:any)=>{
          console.log(data);
          this.img= data.images;
          this.tracksList =data.tracks.items;
        }
      );
    });
  }

}
