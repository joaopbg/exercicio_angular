import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent implements OnInit {
  @Output()
  public btnPressedEvent = new EventEmitter() /* */
  @Input("value") value: string
  @Input("buttonType") buttonType: string
  

  constructor() { }

  ngOnInit(): void {
  }

  public btnPressed(){
    this.btnPressedEvent.emit(this.value)

  }

}
