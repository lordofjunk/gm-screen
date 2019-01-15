import { Component, OnInit } from '@angular/core';
import { DiceService, DiceResult } from './../../services/dice.service';

@Component({
  selector: 'app-dice-tray',
  templateUrl: './dice-tray.component.html',
  styleUrls: ['./dice-tray.component.scss']
})
export class DiceTrayComponent implements OnInit {

  results: DiceResult[];
  diceNum: number;
  diceSides: number;

  constructor(private diceService: DiceService) { }

  ngOnInit() {
    this.diceNum = 1;
    this.diceSides = 20;
    this.results = [];
  }

  addResult() {
    this.results.push(this.diceService.roll(this.diceNum, this.diceSides));
  }

  clear() {
    this.results = [];
  }

}
