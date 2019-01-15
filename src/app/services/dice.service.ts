import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  constructor() { }

  roll(num: number, sides: number) {
    var results = new DiceResult();
    results.data = [];
    results.count = num;
    results.sides = sides;
    for(var i = 0; i < sides; i++) {
      results.data.push(0);
    }
    for(var die = 0; die < num; die++) {
      var r = 1 + Math.floor(sides * Math.random());
      results.sum += r;
      results.data[r - 1]++;
    }
    results.average = results.sum / results.count;
    return results;
  }

}

export class DiceResult {
  sum: number = 0;
  average: number = 0;
  count: number = 0;
  sides: number = 0;
  data: number[] = [];

  resultString() {
    var out = []
    for(var n = this.sides - 1; n >= 0; n--) {
      for(var i = 0; i < this.data[n]; i++) {
        out.push(n + 1);
      }
    }
    return out;
  }
}
