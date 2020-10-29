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
      if (this.rows[i - 1][i][colNumber] === 'a' || this.rows[i - 1][i][colNumber] === 'b') {
        if (this.player1) {
          this.rows[i - 2][i - 1][colNumber] = 'a';
        }
        if (this.player2) {
          this.rows[i - 2][i - 1][colNumber] = 'b';
        }
        this.checkRowCombinations(i - 2, i - 1, colNumber);
        this.player2 = !this.player2;
        this.player1 = !this.player1;
        return;
      } else {
        if (this.player1) {
          this.rows[i - 1][i][colNumber] = 'a';
        }
        if (this.player2) {
          this.rows[i - 1][i][colNumber] = 'b';
        }
        this.checkRowCombinations(i - 1, i, colNumber);
        this.player2 = !this.player2;
        this.player1 = !this.player1;

        return;
      }
    }

  }

  // this method will check for row combinations
  checkRowCombinations(index, rownumber, columNumber) {
    let rowMatch;
    let rowStr = '';
    const rowValues = Object.values(this.rows[index][rownumber]).forEach(v => {
      rowStr = rowStr + v;
    });
    const re = new RegExp(/a{4}|b{4}/);
    rowMatch = re.test(rowStr);
    if (rowMatch && this.player1) {
      alert('Player 1 wins!!!');
    } else if (rowMatch && this.player2) {
      alert('player 2 wins!!!');
    }
    console.log(rowMatch);
  }

}
