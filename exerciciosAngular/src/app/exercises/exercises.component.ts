import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit, OnDestroy {

  public name: string = 'João P'

  

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnDestroy(): void {
    
  }

  public showMessage(name: string){
    alert("Hello "+ name)

  }

}
