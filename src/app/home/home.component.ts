import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({

  selector: 'home',  // <home></home>
  providers: [
  ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(public appState: AppState) {

  }

  ngOnInit() {
  }

}
