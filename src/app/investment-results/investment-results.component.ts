import { Component,Input } from '@angular/core';
import { CommonModule,CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment-service';
@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule,CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
    constructor(private investmentservice:InvestmentService) {
      this.investmentservice=investmentservice;
     }

     get results(){
      return this.investmentservice.resultsData;
     }
}
