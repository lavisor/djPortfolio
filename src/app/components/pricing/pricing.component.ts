import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {


  standardFeatures: any = [
  { equipmentName: 'Bass' , numbers: 2},
  { equipmentName: 'Top(SRX)' , numbers: 2},
  { equipmentName: 'Bubble machine' , numbers: 1},
  { equipmentName: 'Smoke machine' , numbers: 1},
  { equipmentName: 'LED Lights' , numbers: 6},
  { equipmentName: 'Laser lights' , numbers: 4},
  { equipmentName: 'Cord-less Mic' , numbers: 1},
  { equipmentName: 'Console Mask LED Panel' , numbers: 1},
  { equipmentName: 'Audio Mixer' , numbers: 1},
  { equipmentName: 'Fire' , numbers: 1}
  ];

  premiumFeatures: any = [
    { equipmentName: 'Bass' , numbers: 2},
    { equipmentName: 'Top(SRX)' , numbers: 2},
    { equipmentName: 'Bubble machine' , numbers: 1},
    { equipmentName: 'Smoke machine' , numbers: 1},
    { equipmentName: 'LED Lights' , numbers: 6},
    { equipmentName: 'Laser lights' , numbers: 4},
    { equipmentName: 'Cord-less Mic' , numbers: 2},
    { equipmentName: 'Console Mask Black Cloth' , numbers: 1},
    { equipmentName: 'Audio Mixer' , numbers: 1},
    { equipmentName: 'Sparklink Fire' , numbers: 1},
    { equipmentName: 'Sharphy Lights(spot)' , numbers: 2}
    ];

    highEndFeatures: any = [
      { equipmentName: 'Bass' , numbers: 2},
      { equipmentName: 'Top(SRX)' , numbers: 2},
      { equipmentName: 'Bubble machine' , numbers: 1},
      { equipmentName: 'Smoke machine' , numbers: 1},
      { equipmentName: 'LED Lights' , numbers: 8},
      { equipmentName: 'Laser lights' , numbers: 4},
      { equipmentName: 'Cord-less Mic' , numbers: 2},
      { equipmentName: 'Console Mask Black Cloth' , numbers: 1},
      { equipmentName: 'Audio Mixer' , numbers: 1},
      { equipmentName: 'Dance Floor' , numbers: 1},
      { equipmentName: 'Sparklink Fire' , numbers: 1},
      { equipmentName: 'Sharphy Lights(spot)' , numbers: 4}
      ];

  pricingPlans: any = [
    { planName: 'Standard' , price: '9999' , features: this.standardFeatures},
    { planName: 'Premium' , price: '12999' , features: this.premiumFeatures},
    { planName: 'High-End' , price: '22999' , features: this.highEndFeatures}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
