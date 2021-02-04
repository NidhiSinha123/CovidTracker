import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board-card',
  templateUrl: './dash-board-card.component.html',
  styleUrls: ['./dash-board-card.component.css']
})
export class DashBoardCardComponent implements OnInit {
  @Input("totalConfirmed")
  totalConfirmed;
  @Input("totalActive")
  totalActive;
  @Input("totalRecovered")
  totalRecovered;
  @Input("totalDeaths")
  totalDeaths;

  constructor() { }

  ngOnInit(): void {
  }

}
