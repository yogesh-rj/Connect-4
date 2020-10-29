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
  isMatched = false;
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
    for (let i = 6; i > 0; i--) {
      if (this.rows[i - 1][i][colNumber] !== 'a' && this.rows[i - 1][i][colNumber] !== 'b') {
        if (this.player1) {
          this.rows[i - 1][i][colNumber] = 'a';
        }
        if (this.player2) {
          this.rows[i - 1][i][colNumber] = 'b';
        }
        const rowMatch = this.checkRowCombinations(i - 1, i, colNumber);
        const columnMatch = this.checkColumnsCombinations(i - 1, i, colNumber);
        this.player2 = !this.player2;
        this.player1 = !this.player1;
        if (rowMatch && this.player1) {
          this.isMatched = true;
          alert('Player 1 wins!!!');
        } else if (rowMatch && this.player2) {
          this.isMatched = true;
          alert('player 2 wins!!!');
        }

        if (columnMatch && this.player1) {
          this.isMatched = true;
          alert('Player 1 wins!!!');
        } else if (columnMatch && this.player2) {
          this.isMatched = true;
          alert('player 2 wins!!!');
        }

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
    console.log(rowMatch);
    return rowMatch;
  }

  // this method will check for column combinations
  checkColumnsCombinations(index, rownumber, columNumber) {
    let columnMatch;
    let colStr = '';
    this.rows.forEach((rw, i) => {
      colStr = colStr + rw[i + 1][columNumber];
    });
    const re = new RegExp(/a{4}|b{4}/);
    columnMatch = re.test(colStr);
    console.log(columnMatch);
    return columnMatch;
  }

  // this method will reset the game
  resetGame(){
    this.player1 = true;
    this.isMatched = false;
    this.rows = [
      { 1: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } },
      { 2: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } },
      { 3: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } },
      { 4: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } },
      { 5: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } },
      { 6: { 1: '0', 2: '0', 3: '0', 4: '0', 5: '0', 6: '0', 7: '0' } }
    ];
  }

}
