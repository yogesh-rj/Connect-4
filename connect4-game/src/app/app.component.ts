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
  rows = [
    { 1: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } },
    { 2: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } },
    { 3: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } },
    { 4: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } },
    { 5: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } },
    { 6: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } }
  ];
  cols = ['0', '0', '0', '0', '0', '0', '0'];

  // this method is for selecting Discs
  selectColumn(colNumber) {
    for (let i = 6; i > 1; i--) {
      if (this.rows[i - 1][i][colNumber] === 'p1' || this.rows[i - 1][i][colNumber] === 'p2') {
        if (this.player1) {
          this.rows[i - 2][i - 1][colNumber] = 'p1';
        }
        if (this.player2) {
          this.rows[i - 2][i - 1][colNumber] = 'p2';
        }
        this.player2 = !this.player2;
        this.player1 = !this.player1;
        return;
      } else {
        if (this.player1) {
          this.rows[i - 1][i][colNumber] = 'p1';
        }
        if (this.player2) {
          this.rows[i - 1][i][colNumber] = 'p2';
        }

        this.player2 = !this.player2;
        this.player1 = !this.player1;
        return;
      }

      console.log(this.rows);
    }

  }

}
