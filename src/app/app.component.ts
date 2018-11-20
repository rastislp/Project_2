import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Avon';
  

    constructor(private bottomSheet : MatBottomSheet){
  
    }
  
    openBottomSheet() {
      this.bottomSheet.open(ContactComponent);
    }
  

}


