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
  private operationsArray = []
  

  constructor() { }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  public setDisplayExpression(value: string){
    this.displayExpression = this.displayExpression+value

  }

  public resetDisplayExpression(){
      this.cleanData()
      this.dataExpression = []    

  }

  private arrayControler(){
      return this.dataExpression.length > 1
  }



  private cleanData(){
    this.displayExpression = ''
  }

  private addDataToExpression(displayExpression, operation: string){
    this.dataExpression.push(displayExpression)
    this.operationsArray.push(operation)
    
    this.cleanData()

  }
  

  public sum(displayExpression){
      this.addDataToExpression(displayExpression,'+')



  }
  public sub(displayExpression){
    this.addDataToExpression(displayExpression,'-')


  }
  public mult(displayExpression){
    this.addDataToExpression(displayExpression,'*')


  } 
  public division(displayExpression){
    this.addDataToExpression(displayExpression,'/')

  }

  public getResult(){
    this.addDataToExpression(this.displayExpression, '=')
    this.solve(this.dataExpression, this.operationsArray)
    this.dataExpression = []
    this.operationsArray = []

  }

  private solve(dataExpression, operationsArray){
    if(this.dataExpression.length > 1){
      do{
        this.calc(dataExpression, operationsArray)
  
      }while(this.dataExpression.length > 1)
    }
    this.displayExpression = this.dataExpression[0]
    
  }

  private calc(dataExpression, operationsArray){
    let result: Number
    let aux1 = [this.dataExpression[0],this.dataExpression[1]]
    let aux2 = this.operationsArray[0]
    this.operationsArray.shift()
    switch (aux2){
      case '+':
        result = Number(aux1[0])+Number(aux1[1])
        this.dataExpression.shift()
        this.dataExpression[0] = result.toString()
        break
      case '-':
        result = Number(aux1[0])-Number(aux1[1])
        this.dataExpression.shift()
        this.dataExpression[0] = result.toString()
        break
      case '*':
        result = Number(aux1[0])*Number(aux1[1])
        this.dataExpression.shift()
        this.dataExpression[0] = result.toString()
        break
      case '/':
        result = Number(aux1[0])/Number(aux1[1])
        this.dataExpression.shift()
        this.dataExpression[0] = result.toString()
        
        break
      default:
    }
  }
}
