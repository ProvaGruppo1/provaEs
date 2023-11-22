import {Component, EventEmitter, Input,Output} from '@angular/core';

@Component({
  selector: 'figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent {

  constructor() { }

  @Input() persona:any;
  @Output() sendTtel = new EventEmitter();

  showPwd: boolean=false;
  tel:string="";

  inviaNumero() {
    this.sendTtel.emit(this.tel);
  }
}
