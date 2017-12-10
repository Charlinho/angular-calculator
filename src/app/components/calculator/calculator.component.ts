import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  displayValue: string = '0';

  public setNumber(number): void {
    if (this.displayValue === '0') {      
      this.displayValue = '';
    }

    this.displayValue = '' + this.displayValue + number;
  }

  public clear(): void {
    this.displayValue = '0';
  }
}
