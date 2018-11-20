import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent{

  moneyspent: string;
  money: string[] = ['less than 10 £   ', 'between 10 and 25 £    ', 'over 25 £    ', 'nothing    '];

  makeorder: string;
  order: string[] = ['will   ', 'wont ', 'might    '];

  feeling: string;
  satisfaction: string[] = ['disapointed','not satified '   , 'satisfied ', 'very satisfied    '];

}





