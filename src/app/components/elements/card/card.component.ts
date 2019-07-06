import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //-- Input - decoradores
  @Input() items:any = [];
  @Input() mostrarLista:boolean;

  //-- declaracion
  mostrarListaCard:boolean=true;
  hideme:any[]=[];
  constructor() { }

  ngOnInit() {
    this.mostrarListaCard = this.mostrarLista;
  }

}
