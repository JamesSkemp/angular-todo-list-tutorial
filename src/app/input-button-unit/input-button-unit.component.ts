import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() {
    this.title = 'Constructor Overrides Declaration';
  }

  ngOnInit(): void {
    this.title = 'ngOnInit Overrides Constructor';
  }

}
