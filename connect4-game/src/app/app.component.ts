import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'connect4-game';
  player1 = true;
  player2 = false;
  rows = [1, 2, 3, 4, 5, 6];
  cols = ['0', '0', '0', '0', '0', '0', '0'];


}
