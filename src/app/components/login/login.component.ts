import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/service/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  user:string;
  pwd:string;
  permitir:boolean=true;

  constructor(private spotify: SpotifyService, private router :Router) {
    this.user="";
    this.pwd="";
   }

  ngOnInit() {
  }

  cancelar(){
    this.permitir = false;
    this.user="";
    this.pwd="";
  }

  login(){
    if(this.user != undefined && this.pwd){
      /* console.log(this.user);
      console.log(this.pwd); */
      this.spotify.getDataClient(this.user).subscribe(
        (data:any) =>{
          console.log(data );
          //console.log(data.id);
          if(data.id){
            localStorage.setItem("user",this.user);
            localStorage.setItem("pwd",this.pwd);
            localStorage.setItem("img",JSON.stringify(data.images));
            console.log('user logeado');
            this.router.navigate(['/home']);
          }
        }
      );
    }
  }

}
