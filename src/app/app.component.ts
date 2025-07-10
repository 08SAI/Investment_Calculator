import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentInput } from './investment-model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentService } from './investment-service';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent,InvestmentResultsComponent,CommonModule],
  providers: [InvestmentService]
})
export class AppComponent {
  demo = 'Investment Calculator';
  constructor(private investmentservice:InvestmentService) {
   }

   get results(){
    return this.investmentservice.resultsData;
   }

   getInvestedValue(event: any){
    console.log(event);
   }

}
