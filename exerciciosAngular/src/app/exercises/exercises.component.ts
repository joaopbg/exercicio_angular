import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit, OnDestroy {

  public buttonType: string = "primary"
  public displayExpression: string = ''
  private dataExpression = []
  private operationsArray = []

  public values=['1','2','3','+','4','5','6','-','7','8','9','*','0','=','C','/']
  
  constructor() { }

  ngOnInit(): void {}

  ngOnDestroy(): void {}


  public btnPressed(value){
    let operators = ['+','-','*','/','=','C']
    if (operators.includes(value)){
      switch(value){
        case '+':
          this.sum(this.displayExpression)
          break
        case '-':
          this.sub(this.displayExpression)
          break
        case '*':
          this.mult(this.displayExpression)
          break
        case '/':
          this.division(this.displayExpression)
          break
        case '=':
          this.getResult()
          break
        case 'C':
          this.resetAllExpressionData()
          break
      }
    }else this.setDisplayExpression(value)
  }

  private setDisplayExpression(value: string){
    this.displayExpression = this.displayExpression+value

  }

  private resetAllExpressionData(){
      this.cleanDisplay()
      this.dataExpression = []    

  }

  private cleanDisplay(){
    this.displayExpression = ''
  }

  private addDataToExpression(displayExpression, operation: string){
    this.dataExpression.push(displayExpression)
    this.operationsArray.push(operation)
    this.cleanDisplay()

  }
  

  private sum(displayExpression){
      this.addDataToExpression(displayExpression,'+')
  }

  private sub(displayExpression){
    this.addDataToExpression(displayExpression,'-')
  }

  private mult(displayExpression){
    this.addDataToExpression(displayExpression,'*')
  } 

  private division(displayExpression){
    this.addDataToExpression(displayExpression,'/')
  }

  private getResult(){
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
    let toBeCalculated = [this.dataExpression[0],this.dataExpression[1]]
    let operationSelected = this.operationsArray[0]
    this.operationsArray.shift()
    switch (operationSelected){
      case '+':
        result = Number(toBeCalculated[0])+Number(toBeCalculated[1])
        this.updateArray(result)
        break
      case '-':
        result = Number(toBeCalculated[0])-Number(toBeCalculated[1])
        this.updateArray(result)
        break
      case '*':
        result = Number(toBeCalculated[0])*Number(toBeCalculated[1])
        this.updateArray(result)
        break
      case '/':
        result = Number(toBeCalculated[0])/Number(toBeCalculated[1])
        this.updateArray(result)
        break
      default:
    }
  }

  private updateArray(result: Number){
    this.dataExpression.shift()
    this.dataExpression[0] = result.toString()

  }
  
}

