import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  appTitle: string = "Dungeon Master Screen"

  constructor() { }

  ngOnInit() {
  }

}
