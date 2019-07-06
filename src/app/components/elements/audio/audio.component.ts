import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

//-- service
import { SpotifyService } from 'src/app/service/spotify.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  //-- input - decoradores
  @Input() tipo:any;
  @Input() id:any;

  //-declaracion
  pathAudio: any;

  constructor( private spotify: SpotifyService,private domSanitizer : DomSanitizer) {
   }

  ngOnInit() {
    this.pathAudio = this.validarUrl(`https://open.spotify.com/embed/${this.tipo}/${this.id}`);
  }

  validarUrl(url:string){
     return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
