import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OutletContext } from '@angular/router';
import { InvestmentInput } from '../investment-model';
import { InvestmentService } from '../investment-service';
import { ButtonComponent } from "../button/button.component";
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, ButtonComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Input() invetsment:string="";
  @Output() calculate=new EventEmitter<any>();
  initialInvestment='0';
  annualInvestment='0';
  expectedReturn='5';
  duration='10';
  
  constructor( private investmentservice:InvestmentService){
    this.investmentservice=investmentservice;
  }
  
  onClick(){
    this.calculate.emit({
      initialInvestment: +this.initialInvestment
    })
    this.investmentservice.calculateInvestmentResults({
      initialInvestment: +this.initialInvestment,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.duration,
    });  
    this.initialInvestment='0';
    this.annualInvestment='0';
    this.expectedReturn='5';
    this.duration='10';
  }
}
