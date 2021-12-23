import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricecard',
  templateUrl: './pricecard.component.html',
  styleUrls: ['./pricecard.component.scss']
})
export class PricecardComponent implements OnInit {

  @Input() features: any;
  constructor() { }

  ngOnInit(): void {
  }

}
