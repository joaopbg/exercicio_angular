import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit, OnDestroy {

  public name: string = 'João Pedro'
  public buttonType: string = "primary"
  public displayExpression: string = ''
  private dataExpression = []
  
  



  constructor() { }

  ngOnInit(): void {
    
    let a = "1"
    let b = Number(a)
    a = b.toString()
  }
  ngOnDestroy(): void {
    
  }

  public showMessage(name: string){
    alert("Hello "+ name)

  }

  public setDisplayExpression(value: string){
    this.displayExpression = this.displayExpression+value

  }

  public resetDisplayExpression(){
    this.displayExpression = ''

  }

  public getResult(){
    
  
  }
  public sum(displayExpression){
    

  }
  public sub(displayExpression){

  }
  public mult(displayExpression){

  } 
  public division(displayExpression){

  }

  public numPressed(buttonValue:string){
    this.displayExpression.concat(buttonValue);
    
  }
  

}
