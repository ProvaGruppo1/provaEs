import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent{

  constructor() { }

  url: string = "https://servermeals--mauroracca.repl.co";
  data: any;
  personaForChild: any;
  telDalPadre: string="";

  /*getData() {
    fetch(this.url)
      .then(response => response.json())
      .then(json => {
        this.data = json;
        console.log(this.data);
      })
      .catch(err => console.error("Request failed: ", err));
  }*/

  persone = [
    {
      nome: 'Mattia',
      cognome: 'Mina',
      sesso: 'm',
      eta: 18,
      indirizzo: 'via sus',
      password: 'sus1',
      telefono: ''
    },
    {
      nome: 'Francesca',
      cognome: 'addad',
      sesso: 'f',
      eta: 18,
      indirizzo: 'via sus',
      password: 'sus2',
      telefono: ''
    },
    {
      nome: 'mario',
      cognome: 'rossi',
      sesso: 'm',
      eta: 18,
      indirizzo: 'via sus',
      password: 'sus3',
      telefono: ''
    },
    {
      nome: 'martina',
      cognome: 'dadada',
      sesso: 'f',
      eta: 18,
      indirizzo: 'via sus',
      password: 'sus4',
      telefono: ''
    },
  ]

  getData(){
    this.data=this.persone;
  }


  getPersona(item: any) {
    this.personaForChild=item;
    console.log(this.personaForChild);
  }

  getTelPadre(tel: string){
    this.telDalPadre=tel;
    console.log(this.data[this.personaForChild]);
    this.personaForChild.telefono=this.telDalPadre;
    /*this.data[this.personaForChild].telefono=this.telDalPadre;*/
  }
}
