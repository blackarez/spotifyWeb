import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //- declaracion
  perfil:boolean;
  user:string;
  pwd:string;
  img:any;

  constructor(private router: Router) {
    this.perfil=false;
  }

  ngOnInit() {
    let user= localStorage.getItem('user');
    if(user != undefined){
      console.log('usuario logeado');
      this.perfil=true;
      this.user = user;
      this.pwd = localStorage.getItem('pwd');
      this.img = JSON.parse(localStorage.getItem('img'));
    }else{
      this.router.navigate(['/login']);
    }
  }

  loginout(){
    localStorage.removeItem('user');
    localStorage.removeItem('pwd');
    localStorage.removeItem('img');
    this.router.navigate(['/login']);
  }

}
